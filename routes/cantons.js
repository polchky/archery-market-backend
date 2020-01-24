const Router = require('koa-router');
const { Canton } = require('@models');

const router = new Router({
    prefix: '/cantons',
});

router.param('cantonId', async (id, ctx, next) => {
    try {
        ctx.canton = await Canton.findById(id);
    } catch (err) {
        ctx.throw(400);
    }
    if (!ctx.canton) ctx.throw(404);
    return next();
});

router.get('/', async (ctx) => {
    const cantons = await Canton.find({});
    Canton.setDefaultLanguage(ctx.language);
    ctx.body = JSON.stringify(cantons);
});

router.get('/:cantonId', (ctx) => {
    ctx.canton.setLanguage(ctx.language);
    ctx.body = ctx.canton.toJSON();
});

module.exports = router;
