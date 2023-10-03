var http = require('http'); // require é a funcao com os módulos
var dt = require('./myfirstmodule'); // busca o modulo criado e retorna para dt

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently:" + dt.myDateTime() + dt.myName());
    res.end();
}).listen(8080);