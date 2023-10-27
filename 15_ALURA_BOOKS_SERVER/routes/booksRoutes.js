const express = require('express')
const router = express.Router()
const BooksControllers = require('../controllers/booksControllers')

/*
    Açoes http
    pegar dados = Get
    inserir dados = Post
    deletar dados = Delete
    editar = patch
*/

//rota para pegar todos os livros
router.get('/', BooksControllers.getBooks)
//rota para pegar um unico livro 
router.get('/:id', BooksControllers.getBooksOne)
//rota para insercao de livros
router.post('/', BooksControllers.postBooks)
//rota para editar dados
router.patch('/:id', BooksControllers.patchBooks)
//rota para deletar dados
router.delete('/:id', BooksControllers.deleteBooks)

module.exports = router