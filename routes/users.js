const Router = require('koa-router');
const { auth, param } = require('@middlewares');
const { User } = require('@models');
const { roles } = require('@constants');

const router = new Router({
    prefix: '/users',
});

router.use(auth.jwt);

router.param('userId', param(User));

router.get('/',
    auth.or([
        auth.hasRole(roles.admin),
        auth.and([
            auth.hasRole(roles.moderator),
            auth.hasClub(),
        ]),
    ]),
    async (ctx) => {
        const users = await User.find();
        ctx.body = users;
    });

router.get('/:userId', async (ctx) => {
    ctx.body = ctx.user;
});

router.put('/:userId', auth.jwt, (ctx) => {
    ctx.body = {};
});

module.exports = router;
