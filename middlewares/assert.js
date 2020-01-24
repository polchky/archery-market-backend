const assert = {
    headers: (required) => (ctx, next) => {
        const headers = Array.isArray(required) ? required : [required];
        headers.forEach((h) => {
            ctx.assert(h in ctx.request.headers, 400, `Missing header: ${h}`);
        });
        return next();
    },
    query: (required) => (ctx, next) => {
        const queryParams = Array.isArray(required) ? required : [required];
        queryParams.forEach((p) => {
            ctx.assert(p in ctx.request.query, 400, `Missing parameter: ${p}`);
        });
        return next();
    },
};

module.exports = assert;
