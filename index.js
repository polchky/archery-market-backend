require('module-alias/register');
const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const Mongoose = require('mongoose');
const router = require('@routes');
const { languages } = require('@middlewares');

Mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const app = new Koa();

app
    .use(languages)
    .use(BodyParser())
    .use(router())
    .listen(process.env.PORT);
