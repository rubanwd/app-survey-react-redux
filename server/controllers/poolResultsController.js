const boom = require('boom');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const POOL_RESULTS_JSON_PATH = path.resolve(__dirname, '../data/poolResults.json');

const getPoolResults = (req, res, next) => {
    fs.readFile(POOL_RESULTS_JSON_PATH, 'utf8', (err, fileText) => {
        if (err) {
            throw boom.internal("Error while loading pool.results.json");
        }
        res.send(JSON.parse(fileText));
    });
};

const createPoolResult = (req, res, next) => {
    fs.readFile(POOL_RESULTS_JSON_PATH, 'utf8', (err, fileText) => {
        if (err) {
            throw boom.internal("Error while loading pool.results.json");
        }
        const poolResults = JSON.parse(fileText);
        const newPoolResult = {
            id: uuidv4(),
            name: req.body.name,
            home_town: req.body.home_town,
            favorite_tools: req.body.favorite_tools
        };
        poolResults.push(newPoolResult);

        fs.writeFile(POOL_RESULTS_JSON_PATH, JSON.stringify(poolResults, null, 4), (err) => {
            if (err) {
                throw boom.internal("Error while writing pool.results.json");
            }

            res.send(newPoolResult);
        })
    });
};

module.exports = {
    getPoolResults,
    createPoolResult
};
