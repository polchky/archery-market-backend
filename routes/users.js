const Router = require('koa-router');
const { auth, param } = require('@middlewares');
const { User } = require('@models');

const router = new Router({
    prefix: '/users',
});

router.use(auth.jwt);

router.param('userId', param(User));

router.get('/',
    auth.or([
        auth.hasRole('admin'),
        auth.and([
            auth.hasRole('moderator'),
            auth.hasClub(),
        ]),
    ]),
    async (ctx) => {
        const users = await User.find();
        ctx.body = JSON.stringify(users);
    });

router.get('/:userId', async (ctx) => {
    ctx.body = ctx.user.toJSON();
});

router.put('/:userId', auth.jwt, (ctx) => {
    ctx.body = {};
});

module.exports = router;
