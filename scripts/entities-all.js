/** Create the entities by scanning all  */
/**
 * Waiting input:
 * @param : json filename
 * @param : json key for entities
 */
var fs = require('fs');
var rp = require('request-promise-native')
var chai = require('chai');

const baseUrl = 'https://swapi.co/api/';


const getOptions = (url) => {
    return {
        method: 'GET',
        json: true,
        uri: url,
        rejectUnauthorized: false,
        insecure: true
    };
}

function doRequest(url, entity) {
    let nbWaiting = 0;
    console.log(`Call ${url}`);
    rp(getOptions(url)).then(res => {
        nbWaiting = res.count;
        res.results.map(line => {
            const v = line.name || line.title;
            results[entity].push({
                "value": v,
                "synonyms": [v]
            });
        })
        
        if (res.next) {
            doRequest(res.next, entity);
        } else {
            // finished
            //chai.assert.equal(nbWaiting, result.length);
            // load json file
            //console.log(result);
            // write file 
            console.log(`write file ${entity}`);
            fs.writeFileSync(`entities-${entity}.json`, JSON.stringify(results[entity]));
        }
    }).catch(e => {
        console.log({ e });
    });
}

let results = {};

rp(getOptions(baseUrl)).then(res => {
    for (var k in res) {
        if (res.hasOwnProperty(k)) {
            console.log("Key is " + k + ", value is" + res[k]);
            results[k] = [];
            doRequest(res[k], k);
        }
    }
});