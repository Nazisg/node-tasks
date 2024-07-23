const pool = require('../config/db')
const Book = require('../models/book/books')


const getAllBooks = async () => {
    const res = await pool.query('select * from books')
    return Book.mapAll(res.rows)
}

const getBookById = async id => {
    const res = await pool.query('select * from books b where b.id = $1', [id])
    return Book.mapOne(res.rows[0])
}

const updateBook = async (book) => {
    const { id, title, author, published_date, isbn } = book;
    await pool.query('update books set title = $1, author = $2, published_date = $3, isbn = $4 where id = $5', [title, author, published_date, isbn, id]);
};

const addBook = async book => {
    await pool.query('insert into books (title, author, published_date, isbn) values ($1, $2, $3, $4)', [book.title, book.author, book.published_date, book.isbn]);
}

const deleteBook = async id => {
    await pool.query('delete from books where id = $1', [id]);
    return { message: 'Book deleted successfully' };
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}