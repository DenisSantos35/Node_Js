const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const conn = require('./db/conn')
const User = require('./models/User')


// ********************* criacao do app *****************
const app = express()

// ******************** atribuindo engine para app *****
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// ****************** atribuindo captura body **********
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// **************** rotas de aplicação ****************
app.get('/', (req, res)=>{
    res.render('home')
})

conn.sync().then(()=>{
    app.listen(port, ()=> console.log(`app conectado a porta: ${port}`))
}).catch((err)=> console.log(err))

