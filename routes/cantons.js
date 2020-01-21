const Router = require('koa-router');
const auth = require('../auth');
const { Canton } = require('../models');

const router = new Router({
    prefix: '/cantons',
});

router.get('/', async (ctx) => {
    const cantons = await Canton.find({});
    ctx.body = JSON.stringify(cantons);
});

router.get('/:cantonId', async (ctx) => {
    const canton = await Canton.findById(ctx.params.cantonId);
    console.log(canton.translate());
});

module.exports = router;
