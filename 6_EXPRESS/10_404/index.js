const express = require('express')
const path = require('path')
const port = 3000
const app = express()

// importa o diretorio users ************************************
const users = require('./users')



//ler o body para usar o metodo post *****************************
app.use(
    express.urlencoded({
        extended: true,
    })
)

// retornar todos os arquivos com js ****************************
app.use(express.json())

// arquivos estáticos *******************************************
app.use(express.static('public'))

// busca o diretorio e o nome do caminho ************************
const basePath = path.join(__dirname, 'templates')


app.use('/users', users)

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req,res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=> console.log(`app conectado na porta ${port}`))



