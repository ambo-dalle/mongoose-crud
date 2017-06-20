var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var books_collection = new Schema({
     isbn : String,
     title : String,
     author : String,
     category  :String,
     stok : String
})

var Books = mongoose.model('Book', books_collection)

module.exports = Books;
