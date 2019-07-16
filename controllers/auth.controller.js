const Auth = require('../models/auth_test.model');
const {check, validationResult } = require('express-validator/check');

exports.findAll = (req, res) => {
    Auth.find()
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'no data'
            })
            console.log(err);
        })

}


exports.signUp = (req, res) => {
    const { name, email, password, password2 } = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(422).send(errors.array());
        console.log(errors.errors);
    }else {
        res.send('loading.....');
        console.log('sign up.....');
    }



}

exports.validate = (method) => {
    switch(method){
        case 'sign_up':
            return [
                check('name')
                .isAlpha().withMessage('only chars')
                .not().isEmpty().withMessage('not emty'),

                check('email')
                .isEmail()
                .withMessage('not email')
                .not()
                .isEmpty()
                .withMessage('not emty'),

                check('password').custom((password, {req}) => {
                    console.log(password===req.body.password2?'ok':'fail');
                })

                

                
            ]
    }
}


