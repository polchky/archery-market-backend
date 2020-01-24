const CombineRouters = require('koa-combine-routers');
const auth = require('@routes/auth');
const canton = require('@routes/cantons');
const clubs = require('@routes/clubs');
const users = require('@routes/users');

const router = CombineRouters([
    auth,
    canton,
    clubs,
    users,
]);

module.exports = router;
