const booksController = require('../controllers/booksController')
const express = require('express')
const router = express.Router()

router.get('/', booksController.getAllBooks)
router.get('/:id', booksController.getBookById)
router.post('/', booksController.addBook)
router.delete('/:id', booksController.deleteBook)
router.put('/:id', booksController.updateBook)

module.exports = router