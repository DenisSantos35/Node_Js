const fs = require("fs")
const conn = require('../db/conn')
const Books = require('../models/books')
module.exports = class BooksControllers{
    // busca todos os livros no arquivo ou no banco de dados
    static getBooks(req, res){
        try{
            //throw new Error("Erro interno de servidor")
            //aqui busca no arquivo json
            const livros = Books.getBooksAllFs()
            //aqui busca no mysql
            const sql = Books.getBooksAllMysql()
            conn.query(sql,(err, data)=>{
                if(err){
                    console.log(err)
                }
                let books = data                
                res.send(books)
            })            
        }catch(error){
            res.status(500).send(error.message)
        }        
    }

    //busca um livro especifico
    static getBooksOne(req, res){
        try{
            const id = req.params.id
            const livro = Books.getBooksOneFs(id)
            const booksFilter = Books.getBooksOneMysql(id)
            conn.query(booksFilter, (err, data)=>{
                if(err){
                    console.log(err)
                }
                let books = data                
                res.send(books)
            })
            

        }catch(error){
            res.status(500).send(error.message)
        }
    }

    static postBooks(req,res){
        res.send(`Você fez uma requisição do tipo POST`)
    }

    static patchBooks(req,res){
        res.send(`Você fez uma requisição do tipo PATCH`)
    }

    static deleteBooks(req,res){
        res.send(`Você fez uma requisição do tipo DELETE`)
    }
}