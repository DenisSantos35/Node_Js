const express = require('express')
const app = express()
const path = require('path')
const users = require('./users')

const port = 5000

const basePath = path.join(__dirname, 'templates')

// acesso ao body
app.use(express.urlencoded({
    extended: true,
}
))

app.use(express.json())

app.use('/users', users)
// acesso a arquivos staticos
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=> console.log(`app esta na porta: ${5000}`))

