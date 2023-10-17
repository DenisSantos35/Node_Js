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

    static async removeTask(req, res){
        const id = req.body.id

        await Task.destroy({where:{id:id}})

        res.redirect('/tasks')
    }

    static async updateTask(req,res){
        const id = req.params.id

        const task = await Task.findOne({where:{id:id}, raw: true})

        res.render('tasks/edit', { task })
    }
    
    static async updateTaskPost(req, res){
        const id = req.body.id
        const task = {            
            title : req.body.title,
            description : req.body.description,
        }

        await Task.update(task, {where:{id:id}})

        res.redirect('/tasks')
    }
    
}