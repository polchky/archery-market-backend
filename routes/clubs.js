const Router = require('koa-router');
const { Club } = require('@models');
const { auth, param } = require('@middlewares');

const router = new Router({
    prefix: '/clubs',
});

router.param('clubId', param(Club));

router.get('/', async (ctx) => {
    const clubs = await Club.find({});
    ctx.body = JSON.stringify(clubs);
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
