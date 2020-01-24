const Router = require('koa-router');
const { Club } = require('@models');
const { auth } = require('@middlewares');

const router = new Router({
    prefix: '/clubs',
});

router.param('clubId', async (id, ctx, next) => {
    try {
        ctx.club = await Club.findById(id);
        if (!ctx.club) ctx.throw(404);
        await next();
    } catch (err) {
        ctx.throw(404);
    }
});

router.get('/', async (ctx) => {
    ctx.body = await Club.find({});
});

router.get('/:clubId', auth.jwt, auth.hasClub(), async (ctx) => {
    ctx.body = ctx.club;
});

router.post('/:clubId', auth.jwt, auth.hasRole('admin'), async (ctx) => {
    const club = new Club(ctx.request.body);
    await club.save();
    ctx.status = 201;
});

module.exports = router;
