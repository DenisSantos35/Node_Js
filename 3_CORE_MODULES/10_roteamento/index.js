const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res)=>{

    const q = url.parse(req.url, true) // pegamsos a url da requesição
    const fileName = q.pathname.substring(1) // pegamos o caminho apartir do caracter 1 da url capturada
    console.log(fileName)

    if(fileName.includes('html')){ // verifica se o url capturada existe nos arquivos
      if(fs.existsSync(fileName)){
        fs.readFile(fileName, function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
      }else{
        // 404
        fs.readFile('404.html', function(err, data){
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })

      }
    }

})

server.listen(port, ()=> console.log(`Servidor conectado a porta: ${port}`));