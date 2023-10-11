const express = require('express')
const app = express()
const port = 3000 // variavel ambiente


// a requisição é quando o usuário envia algo através de um formulário ou input
// é o que enviamos para o usuário
app.get('/', (req,res)=>{
    res.send('hellow world!')
})
app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})




