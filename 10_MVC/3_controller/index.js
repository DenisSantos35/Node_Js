const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require('./models/Task')

//  ********** criacao do app ********************
const app = express()

// ********* atribuicao da engine ****************
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// ******** busca de parametros na view **********
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ******** busca arquivos estaticos *************
app.use(express.static('public'))

// *********** artribuicao de port ****************
conn.sync()
.then(
    app.listen(3000)
)
.catch((err)=> console.log(err))