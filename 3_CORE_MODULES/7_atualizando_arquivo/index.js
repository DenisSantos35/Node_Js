const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err,data){
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        const nameNewLine = name + "," + '\r\n'
        //escreve no arquivo e substitui a cada escrita
        //fs.writeFile('arquivo.txt', name, function(err,data){
         //   res.writeHead(302,{
         //       Location: '/',
         //   })
         //   return res.end()
        //})

        // escreve no arquivo sem sobrescrever ai faz se o tratamento de pular linha na propria palavra recebida.
        fs.appendFile('arquivo.txt', nameNewLine, function(err, data){
            res.writeHead(302,{
                Location: '/'
            })
            return res.end()
        })
    }
})

server.listen(port, ()=> console.log(`Conectado na porta: ${port}`))