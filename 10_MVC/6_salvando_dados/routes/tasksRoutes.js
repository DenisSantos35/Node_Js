const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TasksControllers')
const TasksController = require('../controllers/TasksControllers')

router.get('/add', TaskController.createTasks)
router.post('/add', TasksController.createTasksSave)
router.get('/', TaskController.showTasks)

module.exports = router