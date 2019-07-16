const mongoose = require('mongoose');

mongoose.pluralize(null)

const authorSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('author', authorSchema);