const auth = require('@middlewares/auth');
const assert = require('@middlewares/assert');
const languages = require('@middlewares/languages');

const middlewares = {
    auth,
    assert,
    languages,
};

module.exports = middlewares;
