const conn = require('../db/conn')
const fs = require('fs')

module.exports = class Books{

    //busca todos os arquivos json 
    static getBooksAllFs(){
        return JSON.parse(fs.readFileSync("livros.json"))
    }

    // buscar 1 unico arquivo
    static getBooksOneFs(id){
        const livros = JSON.parse(fs.readFileSync("livros.json"))
        const livroFiltrado = livros.filter((livro) => livro.id === id)
        return livroFiltrado
    }
    
    
    static getBooksAllMysql(){
        return `SELECT * FROM books`
    }
    //buscar um unico arquivo no banco de dados
    static getBooksOneMysql(id){
        const books = `SELECT idbooks, nome FROM books where idbooks = ${id}`
        return books
    }
}