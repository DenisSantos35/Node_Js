const conn = require('../db/conn')
const fs = require('fs')


module.exports = class FavoriteBooks{
    // buscando livros favoritos em json
    static getFavoriteBooksAll(){
        const livros = JSON.parse(fs.readFileSync("favoritos.json"))
        return livros
    }
    //buscando livros favoritos em mysql
    static getFavoriteBooksAllMysql(){
        const query = `SELECT * FROM booksalura.favoritebooks;`
        return query
    }

    //deletando dados por id 
    static deleteFavoriteBook(id){
        const livros = JSON.parse(fs.readFileSync("favoritebooks.json"))        
        const livrosFiltrados = livros.filter((livro)=> livro.id !== id)
        fs.writeFileSync("favoritebooks.json", JSON.stringify(livrosFiltrados))        
        
    }
    
    //deletando dados do banco de dados
    static deleteFavoriteBookMysql(id){
        const query = `DELETE FROM booksalura.favoritebooks WHERE idfavoritebooks = ${id};`
        return query
    }

    //inserinfo lista de livros
    static insertFavoriteBook(id){
        const livros = JSON.parse(fs.readFileSync("livros.json"))
        
        const livrosFavoritos = JSON.parse(fs.readFileSync("favoritebooks.json"))

        const livroInserido = livros.find((livro)=> livro.id === id) 
        console.log(livroInserido) 
        if(!livroInserido){
            res.status(501).send("dados invalidos")
            return
        }      
        let novaListaDeLivrosFavoritos = [...livrosFavoritos,livroInserido]

        fs.writeFileSync("favoritebooks.json", JSON.stringify(novaListaDeLivrosFavoritos))
    }

    //inserindo livro no mysql
    static insertFavoriteBookMysql(id){
        const query = `SELECT * FROM booksalura.books WHERE idbooks = ${id};`
        console.log(id)
        
        let nome = ""
        let idbooks = ""
        // pega primeira query realiza
        conn.query(query,(err, data)=>{
            if(err){
                res.status(500).send('Erro ao salvar dados')
            }
            //retorna dados 
            let dataQuery = data
            nome = dataQuery[0].nome
            idbooks = dataQuery[0].idbooks 

            const insert = `insert into booksalura.favoritebooks (nome, id_idbooks) values ( '${nome}' , ${id});`
            conn.query(insert, (err)=>{
                if(err){
                    console.log("Erro aqui")
                }
            })                                             
        }) 
        
        
    }
}

