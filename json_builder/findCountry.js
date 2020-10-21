// const request = require('request');
// I originally wanted to use Request, but this has been deprecated!
"use strict";

const fetch = require('node-fetch');
const where = require("lodash.where");
const partial = process.argv.slice(2);
const resultsArr = [];
const fs = require('fs');


fetch(`https://restcountries.eu/rest/v2/name/${partial}`)
    .then(res => res.json())
    .then(json => {
        if (json.length) {
            filterForRegion(json);
        }
        else {
            console.error("Incorrect input");
        }
    });


const filterForRegion = (json) => {
    const filtered = where(json, { "region": "Europe" });

    filtered.map(country => {
        resultsArr.push({
            countryName: `${country.name}`,
            capitalCity: `${country.capital}`
        })

    });

    // const data = JSON.stringify({results:resultsArr}, null, 2);      // Human readable output
    const data = JSON.stringify({ results: resultsArr });

    console.info('Writing file ...');

    fs.writeFile(`../client/public/data/${partial}.json`, data, (err) => {
        if (err) {
            throw err;
        }
        else {
            console.info('File completed.');
        }
    });

}