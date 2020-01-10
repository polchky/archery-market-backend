const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('mongoose-type-email');

const userSchema = new Mongoose.Schema(
    {
        email: { type: Mongoose.SchemaTypes.Email, required: true, unique: true },
        password: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        phone: String,
        role: { type: String, required: true },
        __v: { type: Number, select: false },
        created: { type: Date, default: Date.now },
    },
);

async function hashPassword(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR));
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        return next();
    } catch (err) {
        return next(err);
    }
}

userSchema.pre('save', hashPassword);

function comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
}

userSchema.methods.comparePassword = comparePassword;

module.exports = Mongoose.model('User', userSchema);
