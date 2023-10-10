// verificando a existencia de diretório e criação caso não exista
const fs = require('fs')

if(!fs.existsSync('./minhapasta2')){
    console.log('Nao existe')
    fs.mkdirSync('minhapasta2')
}else if(fs.existsSync('./minhapasta2')){
    console.log('existe')
}