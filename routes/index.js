const CombineRouters = require('koa-combine-routers');

const auth = require('./auth');
const clubs = require('./clubs');
const users = require('./users');

const router = CombineRouters([
    auth,
    clubs,
    users,
]);

module.exports = router;
