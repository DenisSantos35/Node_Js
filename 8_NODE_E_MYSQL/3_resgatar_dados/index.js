const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const database = 'nodemysql2'
const senha = '1234'

// **************** instanci do express em app ************
const app = express()

// **************** atribui engine para app ***************
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// ***************** atribui para app arquivos staticos ********
app.use(express.static('public'))

// ************** atribui ferramentas de capturas do body para app *****
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// **************** capturar dados de  formulario e inserir no banco********
app.post('/books/insertbooks', (req, res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const saveData = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`

    conn.query(saveData, (err)=>{
        if(err){
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})

// ****************** buscar dados no banco ****************************
app.get('/books', (req,res)=>{
    const saveData = "SELECT * FROM books"
    conn.query(saveData, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        res.render('books', { books })
    })
})




//************** criaçao de rotas ***************************************
app.get('/', (req, res)=>{
    res.render('home')
})

//*****************criacao de conecção com banco de dados ********************
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: senha,
    database: database
})

// *******************conectar banco a aplicacao *****************************
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('Connect Mysql sucefful')
    app.listen(5000, ()=>console.log('Connect sucefful'))
})