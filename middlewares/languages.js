const compose = require('koa-compose');
const assert = require('@middlewares/assert');
const constants = require('@constants');

const languages = compose([
    assert.headers('language'),
    (ctx, next) => {
        ctx.assert(constants.languages.indexOf(ctx.request.headers.language) > -1, 400);
        ctx.language = ctx.request.headers.language;
        return next();
    },
]);

module.exports = languages;
