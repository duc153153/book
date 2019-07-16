const Book = require('../models/book.model');
// exports.findAll = (req, res) => {
//     Book.find().populate('authors')
//     .then(data => {
//         console.log(data)
//         res.send(data);
//     })
//     .catch(err => {
//         res.status(200).send('no!');
//         console.log(err);
//     })
// }

exports.findAll = (req, res) => {
    Book
    .find()
    // .populate('author')
    .sort('published_at')
    .select('title')
    .then(data => {
        res.send(data);
    })
    .catch( error => {
        console.log(error);
    })


    
}

exports.create = (req, res) => {
    const { title, author, published_at, created_at } = req.body;
    const Books = new Book({
        title: title,
        author: author,
        published_at: published_at,
        created_at: created_at
    })

    Books
    .save()
    .then(book => {
        res.send(book);
    })
    .catch(error => {
        console.log(error);
        res.status(500).send('fail!');
    })
}

exports.delete = (req, res) => {
    Book
    .findByIdAndDelete(req.body.bookId)
    .then(data => {
        res.send('delete'+req.body.id+' complete!');
    })
    .catch(error => {
        console.log(error);
        res.status(500).send('error!');
    })
}

exports.update = (req, res) => {
    const { title, author, published_at, created_at } = req.body;

    Book.findByIdAndUpdate(req.params.bookId, {
        title: title,
        author: author,
        published_at: published_at,
        created_at: created_at
    })
    .then( book => {
        res.send(book);
    })
    .catch(error => {
        console.log(error);
        res.status(422).send('fail');
    })
}