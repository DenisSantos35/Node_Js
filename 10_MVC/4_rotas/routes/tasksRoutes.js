const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/Taskcontroller')

router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)

module.exports = router