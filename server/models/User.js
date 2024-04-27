const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            maxLength: 60
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    },
    { timestamps: true } //add created at
)

// COMPARE PASSWORD WITH DB ONE
// userSchema.methods.comparePassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

module.exports = User;