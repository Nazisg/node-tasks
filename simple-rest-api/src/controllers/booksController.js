const BookAddDto = require('../models/book/bookAdd')
const bookService = require('../services/bookService')

const getAllBooks = async (req, res) => {
    const data = await bookService.getAllBooks()
    // res.send(JSON.stringify(data,null,2))
    res.json(data)
}

const getBookById = async (req, res) => {
    const data = await bookService.getBookById(req.params.id)
    res.json(data)
}

const addBook = async (req, res) => {
    const bookAddDto = new BookAddDto(req.body)
    await bookService.addBook(bookAddDto)
    res.status(201).json({ message: 'Data added successfully' })
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    const book = { id, ...req.body };
    await bookService.updateBook(book);
    res.status(200).json({ message: "Book has been updated successfully" });
}

const deleteBook = async (req, res) => {
    await bookService.deleteBook(req.params.id)
    res.status(200).json({ message: "Book has been deleted successfully" });
}
module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}