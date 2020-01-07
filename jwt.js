const Jwt = require('koa-jwt');

const jwt = Jwt({
    secret: process.env.JWT_SECRET,
});

module.exports = jwt;
