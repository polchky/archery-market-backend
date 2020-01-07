const CombineRouters = require('koa-combine-routers');

const clubs = require('./clubs');
const users = require('./users');

const router = CombineRouters([
    clubs,
    users,
]);

module.exports = router;
