const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')
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

    const sql = `INSERT INTO books (??, ??)  VALUES (?, ?)` //defendendo de erros colunas 2 ?? e dados 1 ?
    const data = ['title', 'pageqty', title, pageqty] // e na mesma ordem passa os nomes da coluna e os dados 


    pool.query(sql,data, (err)=>{
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

    pool.query(sql, (err, data)=>{
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

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql,data, (err,data)=>{
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

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const book = data[0]

        res.render('editbook', { book })
    })
})

// ************************* update data in database ****
app.post('/books/updatebook', (req,res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty
    const id = req.body.id

    const sql = `UPDATE books SET ?? = ? , ?? = ? WHERE ?? = ? `
    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(sql, data, (err)=>{
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

// ****************** delete item database **************
app.post('/books/remove/:id', (req, res)=>{
    
    const id = req.params.id

    const sql = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, (err)=>{
        if(err){
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})

// ******************* create routes app ****************
app.get('/', (req, res)=>{
    res.render('home')
})

// **************** create connection database ***********

    app.listen(port, ()=> console.log(`Connect app sucefull in the prot: ${port}`))
