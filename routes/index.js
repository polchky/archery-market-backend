const CombineRouters = require('koa-combine-routers');

const auth = require('./auth');
const canton = require('./cantons');
const clubs = require('./clubs');
const users = require('./users');

const router = CombineRouters([
    auth,
    canton,
    clubs,
    users,
]);

module.exports = router;
