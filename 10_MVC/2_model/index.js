const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require('./models/Task')


// *************** criação do app ********************
const app = express()

// **************** atribuiçaõ da engine**************
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// **************** atribuicao de capiura da views ***
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ****************** atribuicao de arquivos staticos**
app.use(express.static('public'))

// ************ atribuicao da porta html **************
conn.sync()
.then(
    app.listen(3000)
)
.catch((err)=> console.log(err))