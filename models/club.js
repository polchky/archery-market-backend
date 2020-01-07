const Mongoose = require('mongoose');

const clubSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    website: String,
    created: { type: Date, required: true },
});

module.exports = Mongoose.model('Club', clubSchema);
