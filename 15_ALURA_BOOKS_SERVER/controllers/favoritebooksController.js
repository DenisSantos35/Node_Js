const express = require('express')
const FavoriteBooks = require('../models/favoritebooks')
const conn = require('../db/conn')

module.exports = class Favorite {
    static getFavoriteBooks(req, res) {
        try {
            const livro = FavoriteBooks.getFavoriteBooksAll()
            const query = FavoriteBooks.getFavoriteBooksAllMysql()

            conn.query(query, (error, data) => {
                if (error) {
                    res.status(500).res(message.error)
                    return
                }
                let books = data
                res.send(books)
            })

        } catch (err) {
            res.status(500).send(message.err)
        }
    }

    static insertFavorite(req, res) { 
        const id = req.params.id
            
        try {
            
            if(id && Number(id)){
                FavoriteBooks.insertFavoriteBook(id)
                FavoriteBooks.insertFavoriteBookMysql(id)
            }else{
                res.status(422).send('ID invalido')
            }

            res.status(201).send(`Livro inserido com sucesso`)

        } catch (error) {
            res.status(500).send("Erro ao salvar os dados")
        }
    }

    static deleteFavorite(req,res){
        try{
            const id = req.params.id
            
           if(id && Number(id)){
            FavoriteBooks.deleteFavoriteBook(id)
            const query = FavoriteBooks.deleteFavoriteBookMysql(id)
            conn.query(query,(err)=>{
                if(err){
                    res.status(501).send("Erro ao deletar dados")
               }
                res.send(`Livro deletado com sucesso, Nova lista de livros`)
            })
           }else{
            res.status(422).send("ID invalido")
           }           

        }catch(error){
            res.status(500).send("Erro ao deletar dados")
        }
    }
}