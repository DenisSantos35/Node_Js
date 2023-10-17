const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TasksControllers')
const TasksController = require('../controllers/TasksControllers')

// mostro a pagina de add 
router.get('/add', TaskController.createTasks)
// escreve no formulario e captura atraves do post 
router.post('/add', TasksController.createTasksSave)
// aqui vai pegar o id do dado para deltar no banco
router.post('/remove', TasksController.removeTask)
// buscar dados para edição 
router.get('/edit/:id', TasksController.updateTask)
router.post('/edit', TaskController.updateTaskPost)
// aqui vai para a página com todas as tasks capturadas no banco
router.get('/', TaskController.showTasks)

module.exports = router