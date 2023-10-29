const { json } = require('express')
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

    
    //buscar todos os arquivos no banco de dados
    static getBooksAllMysql(){
        return `SELECT * FROM books`
    }
    //buscar um unico arquivo no banco de dados
    static getBooksOneMysql(id){
        const books = `SELECT idbooks, nome FROM books where idbooks = ${id}`
        return books
    }
    // inserir livro no arquivo json
    static insertBooksfs(id,nome){
        const books = JSON.parse(fs.readFileSync("livros.json"))
        const newBook = {"id":id,"nome":nome}
        fs.writeFileSync("livros.json",JSON.stringify([...books,newBook]))
        return newBook
    }
    //inseriir livro no mysql
    static insertBooksMysql(idbooks, nome){
        const query = `INSERT INTO books (idbooks, nome) VALUES ( ${idbooks}, "${nome}");`
        return query
    }
    // editando livro em arquivo json
    static editBookfs(editBook, id){
        let books = JSON.parse(fs.readFileSync("livros.json"))
        console.log(books)
        const modifyIndex = books.findIndex((book)=> book.id === id) // aqui estamos pegando item a item da lista percorrendo e achand o valor do id = id
        const modifyContent = {...books[modifyIndex], ...editBook}
        books[modifyIndex] = modifyContent
        fs.writeFileSync("livros.json",JSON.stringify(books))
    }
    // editando lvro no banco de dados
    static editBookMysql(idbooks, id){
        const query = `UPDATE books SET nome = "${idbooks}" WHERE idbooks = ${id};`
        return query 
    }
    static deleteBookfs(id){
        const books = JSON.parse(fs.readFileSync("livros.json"))
        const deleteIndex = books.filter((book)=> book.id !== id)
        fs.writeFileSync("livros.json", JSON.stringify(deleteIndex))
    }
    //deletando livro no banco de dados
    static deleteBookMysql(id){
        const query = `DELETE FROM books WHERE idbooks = ${id};`
        return query
    }
}