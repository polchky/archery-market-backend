const Mongoose = require('mongoose');
const mongooseIntl = require('mongoose-intl');
const constants = require('@constants');

Mongoose.plugin(mongooseIntl, { languages: constants.languages });
Mongoose.plugin((schema) => {
    schema.options.toJSON = {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            delete ret._id;
        },
    };
});

Mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
