require('module-alias/register');
require('@database');
const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const router = require('@routes');
const { language } = require('@middlewares');

const app = new Koa();

app
    .use(language)
    .use(BodyParser())
    .use(router())
    .listen(process.env.PORT);
