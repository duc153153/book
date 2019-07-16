const express = require('express');
const app = express();

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
const upload = multer();


// for parsing application/json
app.use(bodyParser.json());

//parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

//config resource
app.use(express.static('public'));



//multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


//router
require('./routes/book.routes')(app);
require('./routes/author.routes')(app);


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

