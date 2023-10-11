// para criar outras rotas é necessário criar acima da rota principal

const express = require('express')
const path = require('path')

const app = express()

const basePath = path.join(__dirname, 'templates')

const port = 3000

const checkAuth = function(res, req, next){
    req.authService = true

    if(req.authService){
        console.log('Usuário está logado')
        next()
    }else{
        console.log("Usário não está logado")
        next()
    }
}

app.use(checkAuth)

//nova rota criada
// para pegar os parametros da url usamos  const id = req.params.id
app.get('/users/:id', (req, res)=>{
    const id = req.params.id // aqui ele recupera o id do usuario que vem pela url ex:http://localhost:3000/users/1056248
                            // o id = 1056248

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})


app.get('/', (req,res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=> console.log(`App conectado na porta: ${port}`))

