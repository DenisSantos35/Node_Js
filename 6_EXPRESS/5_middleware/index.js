const express = require('express')
const path = require('path')

const app = express()

const port = 3000

const basePath = path.join(__dirname, 'templates')

// o midlware realiza um codigo entre o res e o req
// sempre que realizalo é necessario passar um next para que va para procima etapa
// é executado de acordo com a requisição do usuário

const checkAuth = function(req, res, next){
    req.authStatus = false

    if(req.authStatus){
        console.log("Está logado, pode continuar")
        next()
    }else{
        console.log("Não está logado, faça o login para continuar")
        next()
    }
}

// chamamos o midllware através do app use
app.use(checkAuth)

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=> console.log(`Servidor conectado na porta: ${port}`))


