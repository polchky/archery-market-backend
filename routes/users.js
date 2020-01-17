const Router = require('koa-router');
const auth = require('../auth');
const User = require('../models/user');

const router = new Router({
    prefix: '/users',
});

router.get('/', auth.jwt, auth.hasRole('admin'), async (ctx) => {
    ctx.body = await User.find();
});

router.get('/:userId', auth.jwt, async (ctx) => {
    try {
        ctx.body = await User.findById(ctx.params.userId);
    } catch (err) {
        ctx.throw(404);
    }
});

module.exports = router;
