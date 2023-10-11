const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates') // aqui ele captura o caminho até o diretorio e concatena a pasta ao qual quer buscar dados
console.log(basePath)

app.get('/', (req,res)=>{
    //C:\Users\DENIS\Documents\GitHub\Node_Js\6_EXPRESS\3_render_html\templates\index.html
    res.sendFile(`${basePath}/index.html`) // passar o caminho da pasta a ser lida

})

app.listen(port, ()=> console.log(`App rodando na porta: ${port}`))


