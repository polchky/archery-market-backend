const Router = require('koa-router');
const { Canton } = require('@models');
const { param } = require('@middlewares');

const router = new Router({
    prefix: '/cantons',
});

router.param('cantonId', param(Canton));

router.get('/', async (ctx) => {
    const cantons = await Canton.find({});
    Canton.setDefaultLanguage(ctx.language);
    ctx.body = JSON.stringify(cantons);
});

router.get('/:cantonId', (ctx) => {
    ctx.body = ctx.canton;
});

module.exports = router;
