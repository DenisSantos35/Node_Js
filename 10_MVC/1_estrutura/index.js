const express = require('express')
const conn = require('./db/conn')
const exphbs = require('express-handlebars')

// **************** criação do app ********************
const app = express()

// *************** atribuição engine ******************
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// **************** parabemtros que vem da view *******
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// **************** arquivos estaticos ****************
app.use(express.static('public'))



app.listen(3000, ()=> ('Connect Suceful'))

