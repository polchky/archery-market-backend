const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = new Router({
    prefix: '/auth',
});

router.post('/register', async (ctx) => {
    try {
        const user = new User({
            firstname: ctx.request.body.firstname,
            lastname: ctx.request.body.lastname,
            email: ctx.request.body.email,
            password: ctx.request.body.password,
            role: 'user',
        });
        await user.save();
        ctx.status = 204;
    } catch (err) {
        if (err.code && err.code === 11000) ctx.throw(409);
        ctx.throw(400);
    }
});

router.post('/login', async (ctx) => {
    try {
        const user = await User.findOne({ email: ctx.request.body.email }).select('+password');
        if (!user) ctx.throw(404);
        const match = await user.comparePassword(ctx.request.body.password);
        if (!match) ctx.throw(401);
        ctx.body = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    } catch (err) {
        ctx.throw(400);
    }
});

module.exports = router;
