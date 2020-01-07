const Router = require('koa-router');
const auth = require('../auth');
const jwt = require('../jwt');

const router = new Router({
    prefix: '/clubs',
});

module.exports = router;
