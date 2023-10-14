const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home')
})

// *************** criar conexao com banco de dados **********************

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodemysql2',
})

// ****************** fazer conecção a cada aplicação ********************
conn.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log('Mysql connect!')
    app.listen(3000, ()=> console.log('connect app'))
})
