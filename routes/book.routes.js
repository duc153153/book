module.exports = (app) => {

    const book = require('../controllers/book.controller');

    app.get('/book',book.findAll);
    app.post('/book', book.create);
    app.delete('/book/:bookId',book.delete);
    app.put('/book/:bookId',book.update);

}