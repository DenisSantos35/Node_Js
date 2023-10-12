const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine','handlebars')

app.get('/homePage', (req, res)=>{
    res.render('homePage')
})

app.get('/', (req, res)=>{
    const user = {
        name: "Denis",
        surname: "Santos",
        age: 32
    }

    const frase = "Seja Bem vindo"

    
    const approved = true

    const auth = approved

    res.render('home', {user: user, frase, auth, approved})
})

app.listen(5000, ()=> console.log('Conection app'))