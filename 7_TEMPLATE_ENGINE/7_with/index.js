const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/initPage', (req, res)=>{
    const option = ["Blog", "Opcao 2", "Opcao 3", "Opcao 4","Opcao 5", "Opcao 6"]
    

    const user = {
        name: 'Denis',
        surname: 'Santos'
    }

    res.render('initPage', {option, user})
})

app.get("/post", (req, res)=>{
    const post = {
        title: "Aprender Node.js",
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js.......',
        comments: 4
    }
    res.render("blogPost", {post})
})

app.get('/', (req, res)=>{

    const user = {
        name: 'Denis',
        surname: 'Santos'
    }

    const approvad = true

    const auth = approvad
    res.render('home', {user, approvad, auth})
})

app.listen(5000, ()=> console.log('Conection app'))