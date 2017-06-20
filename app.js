var express = require('express')
var bodyParser = require('body-parser')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_crud', ()=>{
     console.log('connect to Database');
});

var index = require('./routes/index');
var users = require('./routes/users');
var books = require('./routes/books')
var customers = require('./routes/customer')
var transaksi = require('./routes/transaksi')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/books',books);
app.use('/customers', customers);
app.use('/transaksi', transaksi)

module.exports = app;
