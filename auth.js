const Jwt = require('koa-jwt');

const roles = {
    user: 0,
    member: 1,
    moderator: 2,
    admin: 3,
};

const resolve = (ctx, next, res) => {
    if (next !== undefined) {
        if (res) return next();
        return ctx.throw(403);
    }
    return res;
};

const auth = {
    jwt: Jwt({ secret: process.env.JWT_SECRET }),

    hasRole: (role) => (ctx, next) => {
        const res = roles[ctx.state.user.role] >= roles[role];
        return resolve(ctx, next, res);
    },

    hasClub: (clubId) => (ctx, next) => {
        const res = ctx.state.user.clubId === clubId;
        return resolve(ctx, next, res);
    },

    and: (conditions) => (ctx, next) => {
        const res = conditions.every((condition) => condition(ctx));
        return resolve(ctx, next, res);
    },

    or: (conditions) => (ctx, next) => {
        const res = conditions.some((condition) => condition(ctx));
        return resolve(ctx, next, res);
    },

};


module.exports = auth;
