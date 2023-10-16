const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const User = require('./models/User')
const Address = require('./models/Address')
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

// ***************** acessar rota de formulario ***********
app.get('/users/create', (req, res)=>{
    res.render('adduser')
})

// ***** capturar dados do formulário e salvar no db ******
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

// **************** buscar dados com filtro no db ************

app.get('/users/:id', async (req,res)=>{
    const id = req.params.id

    const user = await User.findOne({raw:true, where: {id: id}})
    
    res.render('userview', { user })
})

// *************** deletar dados filtrado *******************
app.post('/users/delete/:id', async (req,res)=>{
    const id = req.params.id

    await User.destroy({where:{id:id}})

    res.redirect('/')
})

// **************** editar usuário ***************************
app.get('/users/edit/:id', async (req,res)=>{
    const id = req.params.id

    const user = await User.findOne({raw:true, where:{id:id}})

    res.render('useredit', { user })
})

app.post('/users/update', async (req, res)=>{
    const name = req.body.name
    const occupation = req.body.occupation
    let newsLetter = req.body.newsletter
    const id = req.body.id

    if(newsLetter === 'on'){
        newsLetter = true
    }else{
        newsLetter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsLetter
    }

    await User.update(userData,{where:{id:id}})

    res.redirect('/')
    
})

// ***************** trazer dados do db para aplicação *******

app.get('/', async (req,res)=>{

    const users = await User.findAll({raw:true})

    console.log(users)

    res.render('home', {users: users})
})

conn
//.sync()
.sync({force: true}) //para deletar a tabela e recriar usa somente em desenvolvimento para resetar
.then(()=> app.listen(port, ()=> console.log(`Conectado na porta: ${port}`)))
.catch((err)=> console.log(err))