const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const senha = '1234'
const database = 'nodemysql2'
const port = 3000
// **************** create app *************************
const app = express()

// ***************** create engine app *****************
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// ******************* search body *********************
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ******************** package static ******************
app.use(express.static('public'))

// ************** insert data in database **************
app.post('/books/booksinsert', (req, res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty)  VALUES ('${title}', '${pageqty}')`

    conn.query(sql, (err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("insert sucefull")
        res.redirect('/books')
    })
})

// ******************return books at the database ******
app.get('/books', (req, res)=>{
    const sql = `SELECT * FROM books`

    conn.query(sql, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Return data sucefull')
        const listBooks = data

        res.render('books', { listBooks })
    })
})

// *******************return uniq book ******************
app.get('/books/:id', (req, res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, (err,data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Return unique data sucefull')

        const dataBooks = data[0]
        res.render('booksUnique', { dataBooks })

    })
})

// *********************** edit data user ***************
app.get('/books/edit/:id', (req, res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const book = data[0]

        res.render('editbook', { book })
    })
})

// ******************* create routes app ****************
app.get('/', (req, res)=>{
    res.render('home')
})

// **************** create connection database ***********
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: senha,
    database: database
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    
    console.log('Connect mysql sucefull')
    app.listen(port, ()=> console.log(`Connect app sucefull in the prot: ${port}`))
})
