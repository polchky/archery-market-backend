const Router = require('koa-router');
const auth = require('../auth');
const User = require('../models/user');

const router = new Router({
    prefix: '/users',
});

router.get('/', auth('admin'), async (ctx) => {
    ctx.body = await User.find().select('-password');
});

module.exports = router;
