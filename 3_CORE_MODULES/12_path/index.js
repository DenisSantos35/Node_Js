const path = require('path')

const customPath = "/relatorios/denis/relatorio1.pdf" // caminho do nosso relatorio

console.log(path.dirname(customPath)) // nome do diretório = /relatorios/denis
console.log(path.basename(customPath)) // nome o arquivo = relatorio1.pdf
console.log(path.extname(customPath)) // nome da extenção = .pdf


