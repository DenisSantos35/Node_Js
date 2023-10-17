const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TasksControllers')

router.get('/add', TaskController.createTasks)
router.get('/', TaskController.showTasks)

module.exports = router