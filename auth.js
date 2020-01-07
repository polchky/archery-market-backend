const auth = {
    admin: async (ctx, next) => {

        return next();
    },

    user: async (ctx, next) => {
        ctx.body = 'lol';
        return next();
    },
};

module.exports = auth;
