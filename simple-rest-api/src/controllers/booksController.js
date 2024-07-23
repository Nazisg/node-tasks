const BookAddDto = require('../models/book/bookAdd')
const bookService = require('../services/book-service')

const getAllBooks = async (req, res) => {
    const data = await bookService.getAllBooks()
    // res.send(JSON.stringify(data,null,2))
    res.json(data)
}

const getBookById = async (req, res) => {
    const data = await bookService.getBookById(req.params.id)
    res.json(data)
}
const getBookByHierarchy = async (req, res) => {
    const data = await bookService.getBookByHierarchy(req.param.id)
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

const deleteBook = async(req,res)=>{
    const result = await bookService.deleteBook(req.params.id)
    req.json(result)
}
module.exports = {
    getAllBooks,
    getBookById,
    getBookByHierarchy,
    addBook,
    deleteBook,
    updateBook
}