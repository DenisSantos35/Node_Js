const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/initPage', (req, res)=>{

    const items = ["Item a", "Item b", "Item c","Item d", "Item e", "Item f"]

    res.render('initPage', {items})
})

app.get('/', (req, res)=>{

    const user = {
        name: "Denis",
        surname: "Santos",
        age: 32
    }   

    const approvad = true

    const auth = approvad


    res.render('home', {user: user, auth, approvad})
})

app.listen(5000, ()=>console.log('Connection app'))