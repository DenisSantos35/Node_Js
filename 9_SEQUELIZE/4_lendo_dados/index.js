const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const User = require('./models/User')
const port = 3000

//****************** configurar o app *********************
const app = express()

// ******************* atribuir engine para app ***********
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// ***************** atribuir captura do body *************
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ***************** atribuir arquivos staticos **********
app.use(express.static('public'))

// *************** atribuir rotas *************************
app.get('/users/create', (req, res)=>{
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

    await User.create({name, occupation, newsLetter})

    res.redirect('/')

})

app.get('/', async (req,res)=>{

    const users = await User.findAll({raw:true})

    console.log(users)

    res.render('home', {users: users})
})

conn
.sync()
.then(()=>app.listen(port, ()=> console.log(`Conectado na porta: ${port}`)))
.catch((err)=> console.log(err))
