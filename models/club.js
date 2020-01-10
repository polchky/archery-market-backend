const Mongoose = require('mongoose');

const clubSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    website: String,
    created: { type: Date, required: true },
    __v: { type: Number, select: false },
});

module.exports = Mongoose.model('Club', clubSchema);
