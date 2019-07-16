const mongoose = require('mongoose');

mongoose.pluralize(null);


const bookSchema = mongoose.Schema({
    title: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'author'},
    published_at: {
        type: Date,
        default: Date.now()
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})





module.exports = mongoose.model('book', bookSchema)