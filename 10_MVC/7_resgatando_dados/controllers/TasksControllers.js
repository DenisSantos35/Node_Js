const Task = require('../models/Task')

module.exports = class TasksController{
    static createTasks(req,res){
        res.render('tasks/create')
    }

    static async createTasksSave(req, res){
        //criou objeto
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        
        // aqui fazer validações


        //processar dados

        //passa para model e espera
        await Task.create(task)

        // retorna para view
        res.redirect('/tasks')
    }

    static async showTasks(req, res){

        const task = await Task.findAll({raw: true})

        res.render('tasks/all', {task})
    }


}