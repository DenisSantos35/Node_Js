const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.get('/initPage', (req, res)=>{

    const user = {
        name: "Denis",
        surname: "Santos"
    }

    const option = ["Blog", "Option 2", "Option 3"]

    res.render('initPage', {user, option})
})

app.get("/post", (req,res)=>{

    const postBlog = {
        tittle: 'Titulo blog',
        category: "Categoria do Blog",
        body: "Este bolg fala sobre...",
        comments: 10
    }

    res.render('post',{ postBlog })
})

app.get('/blog', (req,res)=>{
    const posts = [
        {
            tittle: "Aprender Node.js",
            category: "JavaScript",
            body: "Teste",
            comments: 15
        },
        {
            tittle: "Aprender PHP",
            category: "PHP",
            body: "Teste",
            comments: 15
        },
        {
            tittle: "Aprender Python",
            category: "Python",
            body: "Teste",
            comments: 15
        }
    ]

    res.render("blog", { posts })
})

app.get('/', (req, res)=>{

    const user = {
        name: "Denis",
        surname: "Santos"
    }

    const approvad = true

    const auth = approvad

    res.render('home', {user, approvad, auth})
})

app.listen(3000, ()=> console.log("App conectado"))