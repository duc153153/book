var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    res.send('banas');
    console.log("this is banas!");
})

module.exports = router;