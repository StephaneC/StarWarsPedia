import { Planet, People, Specie, Film, Vehicle } from "./starwars.data";

var rp = require('request-promise-native');

const baseUrl = 'https://swapi.co/api/';

const getOptions = (url: String) => {
    return {
        method: 'GET',
        json: true,
        uri: url,
        rejectUnauthorized: false,
        insecure: true
    };
}

export const searchPeople = async (people: string): Promise<People[]> => {
    try {
        const url = `${baseUrl}people/?search=${people}`;
        console.log(url);
        const res = await rp(getOptions(url));

        console.log('status: ' + res.status);
        return res.results;
    } catch (e) {
        console.log("Error happened searchPeople", e);
        throw e;
    }
};

export const searchPlanet = async (planet: string): Promise<Planet[]> => {
    try {
        const url = `${baseUrl}/planets/?search=${planet}`;
        console.log(url);
        const res = await rp(getOptions(url));
        return res.results;
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};

export const searchSpecie = async (specie: string): Promise<Specie[]> => {
    try {
        const url = `${baseUrl}/species/?search=${specie}`;
        console.log(url);
        const res = await rp(getOptions(url));
        return res.results;
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};

export const searchStarship = async (specie: string): Promise<Specie[]> => {
    try {
        const url = `${baseUrl}/starships/?search=${specie}`;
        console.log(url);
        const res = await rp(getOptions(url));
        return res.results;
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};

export const searchFilms = async (specie: string): Promise<Film[]> => {
    try {
        const url = `${baseUrl}/films/?search=${specie}`;
        console.log(url);
        const res = await rp(getOptions(url));
        return res.results;
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};

export const searchVehicles = async (specie: string): Promise<Vehicle[]> => {
    try {
        const url = `${baseUrl}/vehicles/?search=${specie}`;
        console.log(url);
        const res = await rp(getOptions(url));
        return res.results;
    } catch (e) {
        console.log("Error happened getting kuaNumber");
        throw e;
    }
};
