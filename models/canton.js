const Mongoose = require('mongoose');
const mongooseIntl = require('mongoose-intl');

const cantonSchema = new Mongoose.Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true, intl: true },
    },
    {
        toJSON: { virtuals: true },
    },
);

cantonSchema.plugin(mongooseIntl, { languages: ['en', 'de', 'fr', 'it'] });

module.exports = Mongoose.model('Canton', cantonSchema);
