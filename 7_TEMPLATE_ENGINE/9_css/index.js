const express = require('express')
const exphbr = require('express-handlebars')

const app = express()

const hbr = exphbr.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbr.engine)

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/initPage', (req, res)=>{
    const user = {
        name: "Denis",
        surname: "Santos",
        middlename: "Diogo dos"
    }

    const options = ["Posts do Blog", "Option 1", "Option 2", "Option 3"]

    res.render('initPage', { user, options })
})


app.get('/post', (req, res)=>{

    const postBlog = {
        tittle: "Aprendendo Node.js",
        category: "Node.js",
        body:"Neste posts vamos ver sobre...",
        comments: 320
    }

    res.render("post", { postBlog })
})

app.get('/blog', (req, res)=>{

    const posts = [
        {
            tittle: "Aprendendo Node.js",
            category: "Node.js",
            body:"Neste posts vamos ver sobre...",
            comments: 320
        },
        {
            tittle: "Aprendendo Java",
            category: "Java",
            body:"Neste posts vamos ver sobre...",
            comments: 450
        },
        {
            tittle: "Aprendendo Python",
            category: "Python",
            body:"Neste posts vamos ver sobre...",
            comments: 445
        }
    ]


    res.render("blog", { posts })
})

app.get('/', (req, res)=>{

    const user = {
        name: "Denis",
        surname: "Santos",
        middlename: "Diogo dos"
    }

    const approvad = true

    const auth = approvad

    res.render('home', { user, approvad, auth})
})

app.listen(3000, ()=> console.log("Conection app"))