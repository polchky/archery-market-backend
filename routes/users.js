const Router = require('koa-router');
const auth = require('@middlewares/auth');
const { User } = require('@models');

const router = new Router({
    prefix: '/users',
});

router.use(auth.jwt);

router.param('userId', async (id, ctx, next) => {
    try {
        ctx.user = await User.findById(id);
        if (!ctx.user) ctx.throw(404);
        await next();
    } catch (err) {
        ctx.throw(404);
    }
});

router.get('/', auth.hasRole('admin'), async (ctx) => {
    const users = await User.find();
    ctx.body = users;
});

router.get('/:userId', async (ctx) => {
    ctx.body = ctx.user;
});

router.put('/:userId', auth.jwt, (ctx) => {

});

module.exports = router;
