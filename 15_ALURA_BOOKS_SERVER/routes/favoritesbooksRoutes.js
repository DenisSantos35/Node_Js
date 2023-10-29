const express = require('express')
const Favorite = require('../controllers/favoritebooksController')
const router = express.Router()

// buscando livros favoritos
//rota para livros favoritos
router.get('/', Favorite.getFavoriteBooks)

// rota para deletar livros
router.post('/:id', Favorite.insertFavorite)

// rota para deletar livros 
router.delete('/:id', Favorite.deleteFavorite)




module.exports = router