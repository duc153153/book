module.exports = (app) => {
    const Auth = require('../controllers/auth.controller');

    app.get('/auth', Auth.findAll);

    app.post('/signup',Auth.validate('sign_up'),Auth.signUp);
}