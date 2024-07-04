const pool = require('../config/db')

const getAllMovies = async () => {
    const res = await pool.query('select * from movies')
    return res.rows
}

const getMovieById = async movie_id => {
    const res = await pool.query('select * from movies m where m.movie_id = 1$', [movie_id])
    return res.rows[0]
}

const createMovie = async movie => {
    const { title } = movie
    const res = await pool.query('insert into movies(title) values($1) returning *', [title])
    return res.rows[0]
}

const updateMovie = async movie => {
    const { movie_id, title } = movie
    const res = await pool.query('update movies set title = $1 where movie_id = $2 returning *', [title,movie_id])
    return res.rows[0]
}

const deleteMovie = async movie_id => {
    const res = await pool.query('delete from movies where movie_id = $1 returning *', [movie_id])
    return res.rows[0]
}

const testingInitialize = async () => {
    // await createMovie({ title: "test" })
    // await createMovie({ title: "test2" })
    // await updateMovie({movie_id:2, title:"hgfdfghjk"})
    await deleteMovie(2)
    const allData = await getAllMovies()
    console.log(allData)
}

testingInitialize()
