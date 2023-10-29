const mysql = require('mysql')
const conn = require('./db/conn')
const cors = require('cors')

const express = require('express')
const booksRouter = require('./routes/booksRoutes')
const favoritebooks = require('./routes/favoritesbooksRoutes')

const app = express()
const port = 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/books', booksRouter)
app.use('/favoritos', favoritebooks)


app.listen(port, ()=> console.log(`Server conect port: ${port}`))