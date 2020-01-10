const Jwt = require('koa-jwt');
const compose = require('koa-compose');

const roles = {
    user: 0,
    member: 1,
    moderator: 2,
    admin: 3,
};

const jwt = Jwt({
    secret: process.env.JWT_SECRET,
});

function checkRoles(role) {
    return (ctx, next) => {
        if (roles[ctx.state.user.role] < roles[role]) ctx.throw(403);
        return next();
    };
}

const auth = (role) => compose([jwt, checkRoles(role)]);

module.exports = auth;
