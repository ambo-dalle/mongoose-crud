var express = require('express')
var bodyParser = require('body-parser')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_crud', ()=>{
     console.log('connect to Database');
});


var books = require('./routes/books')
var customers = require('./routes/customer')
var transaksi = require('./routes/transaksi')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/books',books);
app.use('/customers', customers);
app.use('/transaksi', transaksi)

app.listen(3000, ()=>{
     console.log('live on');
})

module.exports = app;
