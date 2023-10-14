const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

// *********************** criacao de app com express ***********
const app = express()
const senha = '1234'
const dataBase = 'nodemysql2'
const port = 3000

// ********************* atribuição para app o engine ***********
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// ******************** atribuiçao para buscas de posts no body *
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// *************** atribuiçao de arquivos staticos **************
app.use(express.static('public'))

// ************* rotas de controle ******************************

// ************** insert in database ****************************
app.post('/books/insertbooks', (req, res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const data = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`

    conn.query(data, (err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Save data sucefull')
        res.redirect('/books')
    })
})

// ***************** select all in data base *********************
app.get('/books', (req,res)=>{
    const data = "SELECT * FROM books"

    conn.query(data, (err,data)=>{
        if(err){
            console.log(err)
            return
        }

        const listBooks = data
        console.log(listBooks)
        res.render('books', { listBooks })        
    })
    
})

// ******************* select unic data in data base *************
app.get('/books/:id', (req,res)=>{
    const id = req.params.id

    const data = `SELECT * FROM books WHERE id = ${id}`

    conn.query(data, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const book = data[0]

        res.render('book', { book })
    })
})


app.get('/home', (req,res)=>{
    res.render('home')
})

// *************** criacao de conecção com banco de dados *******
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: senha,
    database: dataBase
})

//***************  conectando com banco de dados ****************
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('mysql connect sucefful')
    app.listen(port, ()=> console.log(`App connect in port: ${port}`))
})