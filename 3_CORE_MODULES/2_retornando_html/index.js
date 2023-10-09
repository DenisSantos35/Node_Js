const http = require('http')
const port = 3000

const servidor = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    res.end('<h1>Olá, este é meu primeiro server com html!</h1><p>Testando atualização</p>')

})

servidor.listen(port, ()=>{
    console.log(`Servidor conectado a porta ${port}`)
})