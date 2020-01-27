const constants = require('@constants');

const language = (ctx, next) => {
    ctx.language = ctx.request.headers.language || ctx.request.query.language;
    if (!ctx.language) ctx.throw(400, 'Missing language specifier');
    ctx.assert(constants.languages.indexOf(ctx.language) > -1, 400, 'Unsupported language');
    return next();
};

module.exports = language;
