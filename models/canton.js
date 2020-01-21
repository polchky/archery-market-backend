const Mongoose = require('mongoose');
const MongooseIntl = require('mongoose-intl');

const cantonSchema = new Mongoose.Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true, intl: true },
    },
    {
        toJSON: { virtuals: true },
    },
);

cantonSchema.plugin(MongooseIntl, { languages: ['en', 'de', 'fr', 'it'], defaultLanguage: 'en' });

module.exports = Mongoose.model('Canton', cantonSchema);
