const Task = require('../models/Task')

// quando vamos usar um objeto sem instanciar usamos o método stático
module.exports = class TaskController{
    static createTask(req, res){
        res.render('tasks/create')
    }
}