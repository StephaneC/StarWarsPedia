/** Create the entities by scanning all  */
/**
 * Waiting input:
 * @param : json filename
 * @param : json key for entities
 */
var fs = require('fs');
var rp = require('request-promise-native')
var chai = require('chai');

const baseUrl = 'https://swapi.co/api/people/';

const getOptions = (url) => {
    return {
        method: 'GET',
        json: true,
        uri: url,
        rejectUnauthorized: false,
        insecure: true
    };
}

const doRequest = (url) => {
    rp(getOptions(url)).then(res => {
        nbWaiting = res.count;
        res.results.map(people => {
            result.push(    {
                "value": people.name,
                "synonyms": [people.name]
            });
        })
        url = res.next;
        console.log({url});
        if (url) {
            doRequest(url);
        } else {
            // finished
            chai.assert.equal(nbWaiting, result.length);
            // load json file
            console.log(result);
            // write file 
            fs.writeFileSync('entities-people.json', JSON.stringify(result));  
        }
    }).catch(e => {
        console.log({e});
    });
}

let result = [];
let nbWaiting;
let url = baseUrl;

doRequest(baseUrl);