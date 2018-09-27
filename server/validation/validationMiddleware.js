const { validationResult } = require('express-validator/check');
const boom = require('boom');

function validationMiddleware(req, res, next) {
    const errors = validationResult(req).formatWith(({msg}) => msg);

    if (!errors.isEmpty()) {
        throw boom.badData('Data is not valid', errors.mapped());
    }

    next();
}

module.exports = validationMiddleware;
