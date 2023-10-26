const fs = require('fs')



// ler aquivos, json parse transforma em json
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))

// escrever arquivo, json stringfy escreve texto
const novoDado = {"id": "3", "nome": "Livro mais que demais"}
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")))