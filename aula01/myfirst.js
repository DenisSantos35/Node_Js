var http = require('http'); // require é a funcao com os módulos

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8080);

