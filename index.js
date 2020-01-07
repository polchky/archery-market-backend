const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const Mongoose = require('mongoose');
const router = require('./routes');

Mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const app = new Koa();

app
    .use(BodyParser())
    .use(router())
    .listen(process.env.PORT);
