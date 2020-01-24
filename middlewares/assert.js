const assert = {
    headers: (parameters) => (ctx, next) => {
        const params = Array.isArray(parameters) ? parameters : [parameters];
        params.forEach((p) => {
            ctx.assert(ctx.request.headers[p], 400);
        });
        return next();
    },
    query: (parameters) => (ctx, next) => {
        const params = Array.isArray(parameters) ? parameters : [parameters];
        params.forEach((p) => {
            ctx.assert(ctx.request.query[p], 400);
        });
        return next();
    },
};

module.exports = assert;
