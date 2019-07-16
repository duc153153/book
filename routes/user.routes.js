

module.exports = (app) => {
    const users = require('../controllers/user.controller');

    app.get('/users', users.findAll);

    app.get('/users/:userId', users.findOne);

    app.post('/users', users.create);
    
    app.put('/users/:userId', users.update);

    app.delete('/users/:userId', users.delete);


    app.post('/test_validator',users.validate('createUser'), users.create);
}