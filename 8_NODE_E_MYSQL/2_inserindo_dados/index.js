const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const dataBase = 'nodemysql2'

const app = express()

// ******************** by body ***************************************
app.use(
    express.urlencoded({
        extended: true
    }),    
)

app.use(express.json())

//******************** configure engine to app *************************

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// ************ routes insert database *******************************
app.post('/books/insertbooks', (req,res)=>{
    // captura do formulario os valores, sempre configurar o body que esta acima
    const tittle = req.body.tittle
    const pageqty = req.body.pageqty
    // monta a query em uma constate
    const sql = `INSERT INTO books (title, pageqty) VALUES ('${tittle}', '${pageqty}')`

    //armazena data base , metodo create
    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })   
})

// *********************** routes **************************************
app.get('/', (req, res)=>{
    res.render('home')
})



// ********************** create connection with data base ***********
const conn = mysql.createConnection(
    {
        host: "localhost",
        user: 'root',
        password: '1234',
        database: dataBase,
    }
)

// ***************** connectio data base ****************************
conn.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log("Connect Mysql suceful")
    app.listen(3000, ()=> console.log('Connection app'))
})