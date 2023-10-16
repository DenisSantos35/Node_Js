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

// ***************** atribuir arquivos istaticos *******
app.use(express.static('public'))

// **************** rotas de aplicação ****************
app.get('/users/create', (req,res)=>{
    res.render('adduser')
})

app.post('/users/create', async (req,res)=>{
    const name = req.body.name
    const occupation = req.body.occupation
    let newsLetter = req.body.newsletter

   

    if(newsLetter === 'on'){
        newsLetter = true
    }else{
        newsLetter = false
    }
    console.log(newsLetter)

    await User.create({name, occupation, newsLetter})

    res.redirect('/')
})

app.get('/', (req, res)=>{
    res.render('home')
})

conn.sync().then(()=>{
    app.listen(port, ()=> console.log(`app conectado a porta: ${port}`))
}).catch((err)=> console.log(err))

