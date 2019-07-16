const express = require('express');
const app = express();

const {expressValidator} = require('express-validator');

//config db
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('successfully connected to the db');
}).catch(err => {
    console.log('could not connect to the db');
});

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();//if api caller return res.status(422).json({ errors: errors.array() });


// const validatorOptions = {

// };



// for parsing application/json
app.use(bodyParser.json());

//parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

//config resource
app.use(express.static('public'));


//set pug template
app.set('view engine', 'pug');
app.set('views', './views');

const things = require('./routes/things');
const banas = require('./routes/banas');
const pug = require('./routes/pug');

//middleware test - router: banas
app.use('/banas',function(req, res, next){
    console.log(' a request for things received at: ' + Date.now());
    next();
});


//router
app.use('/things', things);
app.use('/banas', banas);
app.use('/pug', pug);



//multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


//users routes
require('./routes/user.routes')(app);
require('./routes/auth_test.routes')(app);
require('./routes/book.routes')(app);
require('./routes/author.routes')(app);


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

