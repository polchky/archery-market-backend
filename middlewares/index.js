const auth = require('@middlewares/auth');
const assert = require('@middlewares/assert');
const language = require('@middlewares/language');
const param = require('@middlewares/param');

const middlewares = {
    auth,
    assert,
    language,
    param,
};

module.exports = middlewares;
