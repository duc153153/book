const Author = require('../models/author.model');

exports.create = (req, res) => {
    const { name } = req.body;
    const author = new Author({
        name: name
    });
    author
    .save(author)
    .then( data => {
        res.send(data);
    })
    .catch(error => {
        console.log(error);
    })
}