const mongoose = require('mongoose');

mongoose.pluralize(null);

const AuthTestSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: {
        type: Date,
        Default: Date.now()
    }
})

module.exports = mongoose.model('auth_test', AuthTestSchema);