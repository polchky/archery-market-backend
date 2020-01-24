const Mongoose = require('mongoose');

const cantonSchema = new Mongoose.Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true, intl: true },
    },
);

module.exports = Mongoose.model('Canton', cantonSchema);
