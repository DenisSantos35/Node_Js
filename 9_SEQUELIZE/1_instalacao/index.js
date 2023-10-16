const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
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

// ******************* create routes app ****************
app.get('/', (req, res)=>{
    res.render('home')
})

// **************** create connection database ***********

    app.listen(port, ()=> console.log(`Connect app sucefull in the prot: ${port}`))
