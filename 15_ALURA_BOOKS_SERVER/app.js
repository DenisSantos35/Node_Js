const mysql = require('mysql')
const conn = require('./db/conn')

const express = require('express')
const booksRouter = require('./routes/booksRoutes')

const app = express()
const port = 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/books', booksRouter)


app.listen(port, ()=> console.log(`Server conect port: ${port}`))