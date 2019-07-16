const User = require('../models/user.model');
const {check, validationResult} = require('express-validator/check');


exports.create = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).jsonp(errors.array());
    }else {
        const user = new User({
            name: req.body.name,
            age: req.body.age
        });
    
        user.save()
        .then(data => {
            res.send({data, message: 'create success!'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: err.message
            })
        })
    }
    
};

exports.findAll = (req, res) => {
    User.find({}, {name:1})
    .then(users => {
        console.log(users);
        res.send(users);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "no data!"
        });
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "not found user" + req.params.userId
            });
        }
        res.send(user);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.update = (req, res) => {
    const { name, age } = req.body;
    if(!req.body){
        return res.status(400).send({
            message: 'content is emty!'
        })
    }

    User.findByIdAndUpdate(req.params.userId, {
        name: name,
        age: age
    })
    .then(user => {
        res.send({user, message: 'update success!'})
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({
            message: 'fail!!'
        })
    })
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user){
            res.status(404).send({
                message:'not found user id!'
            })
        }
        res.status(200).send('ok delete!')
    })
    .catch(err => {
        console.log(err);
    })
};

exports.validate = (method) => {
    switch(method) {
        case 'createUser': {
            return [
                check('name', 'not emty').isEmpty(),
                check('age', 'not int').isEmpty().isInt()
            ]
        }
    }
}