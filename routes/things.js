var express = require('express');
var router = express.Router();


router.get('/hello', function(req, res){
    res.send('hello world!');
});

router.post('/hello', function(req, res){
    res.send('hello world! post this\n');
});



router.get('/:id', function(req, res){
    res.send('this id is : '+req.params.id);
})





//export this to use in other
module.exports = router;