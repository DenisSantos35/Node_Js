const fs = require("fs")
const conn = require('../db/conn')
const Books = require('../models/books')
const { query } = require("express")
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
                    res.status(500).send(error.message)
                }
                let books = data                
                res.send(livros)
            })            
        }catch(error){
            res.status(500).send(error.message)
        }        
    }

    //busca um livro especifico
    static getBooksOne(req, res){
        try{
            //pegando id
            const id = req.params.id
            // validação do id
            if(id && Number(id)){
                //Number(2) -> 2
                //Number("batata") -> NaN
                const livro = Books.getBooksOneFs(id)
                const booksFilter = Books.getBooksOneMysql(id)
                conn.query(booksFilter, (err, data)=>{
                    if(err){
                        console.log(err)
                    }
                    let books = data                
                    res.send(books)
                })
            }else{
                res.status(422).send("Id inválio")
            }
            
            

        }catch(error){
            res.status(500).send(error.message)
        }
    }
    // inserção de livros em aruqivos e banco de dados
    static postBooks(req,res){
        try{
            const id = req.body.id
            const nome = req.body.nome
            if(id && Number(id) && nome){
                 //inserindo em arquivo
                Books.insertBooksfs(id, nome)
                // inserindo no banco de dados
                const query = Books.insertBooksMysql(id,nome)

                conn.query(query,(err)=>{
                    if(err){
                        res.status(500).send(error.message)
                    }
                    res.status(201).json(`Dados salvo com sucesso ${id}, ${nome}`)
                })  
            }else{
                res.status(422).send('Os campos devem ser preenchido corretamente')
            }
                     
        }catch(error){
            res.status(500).send(error.message)
        }        
    }
    //Editando dados em arquivos e banco de dados
    static patchBooks(req,res){
      try{
        const id = req.params.id
        const nome = req.body.nome
        const body = req.body
        if(id && Number(id)){
             // editar no arquivo json
            Books.editBookfs(body, id)
            // editar no banco de dados
            const query = Books.editBookMysql(nome, id)

            conn.query(query, (err)=>{
                if(err){
                    res.status(500).send(error.message)
                    return
                }
                res.json(`Item modificado com sucesso`)
            }) 
        }else{
            res.status(422).send("Id invalido")
        }
         
      }catch(error){
        res.status(500).send(error.message)
      }
    }
    //deletando dados no arquivo e no banco de dados
    static deleteBooks(req,res){
        try{
            const id = req.params.id
            if(id && Number(id)){
                //deletando de arquivo json
                Books.deleteBookfs(id)
                //deletando do banco de dados my sql
                const query = Books.deleteBookMysql(id)

                conn.query(query,(err)=>{
                    if(err){
                        res.status(500).send(message.err)
                        return
                    }
                    res.send(`Dados deletado com sucesso`)
                })
            }else{
                res.status(422).send('Id invalido')
            }
            
            
        }catch(error){
            res.status(500).send(message.error)
        }
        
    }
}