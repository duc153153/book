const mongoose = require('mongoose');

//disable plural of the collection name
mongoose.pluralize(null);

const UserSchema = mongoose.Schema({
    name: String,
    age: String
});

module.exports = mongoose.model('user', UserSchema);