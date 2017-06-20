const express = require('express')
const router = express.Router()
var BooksController = require('../controller/books_controller')


router.get('/', BooksController.findAllBooks);
router.get('/:id', BooksController.findOneBook);
router.post('/', BooksController.InsertBook)
router.put('/:id', BooksController.updateBook)
router.delete('/:id', BooksController.deleteBook)

module.exports = router
