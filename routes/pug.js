var express = require('express');
var router = express.Router();

router.get('/pug', function(req, res){
    res.render('first_view');
});

router.get('/', function(req, res){
    res.render('form');
});

router.post('/pug_mess', function(req, res){
    console.log(req.body);
    res.send("recieved your request!");
});

module.exports = router;