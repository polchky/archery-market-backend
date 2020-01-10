const Jwt = require('koa-jwt');
const compose = require('koa-compose');

const jwt = Jwt({
    secret: process.env.JWT_SECRET,
});

function checkRoles(r) {
    return (ctx, next) => {
        const { role } = ctx.state.user;
        const roles = typeof r === 'string' ? [r] : r;
        if (roles.length > 0 && role !== 'admin' && !roles.includes(role)) {
            ctx.throw(403);
        }
        return next();
    };
}

const auth = (roles) => compose([jwt, checkRoles(roles)]);

module.exports = auth;
