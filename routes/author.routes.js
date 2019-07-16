module.exports = (app) => {
    const Author = require('../controllers/author.controller');
    app.post('/author',Author.create);

}