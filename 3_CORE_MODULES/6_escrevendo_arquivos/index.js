const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res) =>{

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        // se não tiver um nome apenas leai o index html
        fs.readFile('index.html', (err, data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        // caso tenha dados cria um novo arquivo e escreve nele
        fs.writeFile('arquivo.txt', name, function(err, data){
            res.writeHead(302, { // porta 302 => redirect - redireciona para uma pagina
                Location: '/',
            })
            return res.end()
        })
    }

   
})

server.listen(port, ()=> console.log(`Servidor conectado a porta: ${port}`))