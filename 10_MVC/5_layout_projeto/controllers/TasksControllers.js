const Task = require('../models/Task')

module.exports = class TasksController{
    static createTasks(req,res){
        res.render('tasks/create')
    }

    static showTasks(req, res){
        res.render('tasks/all')
    }
}