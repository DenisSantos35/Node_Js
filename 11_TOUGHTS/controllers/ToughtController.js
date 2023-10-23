const { raw } = require('express')
const Tought = require('../models/Tought')
const User = require('../models/User')

const {Op} = require('sequelize')

module.exports = class ToughtsController{
    static async showToughts(req,res){
        
        let search = ''

        if(req.query.search){
            search = req.query.search
        }

        let order = 'DESC'
        if(req.query.order === 'old'){
            order = 'ASC'
        }else{
            order = 'DESC'
        }


       // const toughts = await Tought.findAll({raw:true})
       const toughtsData = await Tought.findAll({
        include: User,
        where: {
            title: {[Op.like]: `%${search}%`}
        },
        order: [['createdAt', order]]
       })

       //const toughts = toughtsData.map((result)=> result.dataValues) // aqui ele sobusca de 1 relação quando se busca mais de uma utilza-se 
       const toughts = toughtsData.map((result)=> result.get({plain:true}))

       let toughtsQty = toughts.length

       if(toughts === 0){
        toughtsQty = false
       }

        res.render('toughts/home', { toughts, search, toughtsQty })
    }

    static async dashboards(req,res){
        const userId = req.session.userid

        const user = await User.findOne({where:{
            id: userId,
            },
            include:Tought,
            plain: true,
        })

        //chck if user exists
        if(!user){
            res.redirect('/login')
            return
        }

        const toughts = user.Toughts.map((result)=>result.dataValues)
        //const toughts = await Tought.findAll({raw:true,where:{UserId:userId}})
        let emptyToughts = false
        console.log(toughts.length)

        if(toughts.length === 0){
            emptyToughts = true
        }

        res.render('toughts/dashboards', {toughts, emptyToughts})
    }
    // aqui renderizamos na tela do usuário a pagina de criação
    static createTought(req, res){
        res.render('toughts/create') //quando e render voce passa o diretorio e o arquivo
    }

    static async updateTought(req, res){
        const id = req.params.id

        const tought = await Tought.findOne({raw: true, where:{id:id}})

        res.render('toughts/edit', { tought })
    }

    static async updateToughtSave(req, res){
        const id = req.body.id

        const tought = {
            title: req.body.title
        }

        try{
            await Tought.update(tought, {where:{id: id}})

            req.flash("message", "Pensamento atualizado com sucesso!")

            req.session.save(()=>{
            res.redirect('/toughts/dashboards')
        })

        }catch(err){
            console.log(err)
        }

    }

    // aqui quando o usuario digita no formulario e submet capturamos o titulo que vem do body
    // e capituramos da session o userid do usuario que esta logado
    // apos chamamos o modelo tought e salvamos os dados no banco
    //sempre que salvar no banco tambem salvar na session o redirecionamento
    static async createToughtSave(req,res){
        const tought = {
            title: req.body.title,
            UserId: req.session.userid
        }
        
        try{
            await Tought.create(tought)

            req.flash('message', 'Pensamento criado com sucesso!')
            req.session.save(()=>{
            res.redirect('/toughts/dashboards') // quando e redirect voce redireciona para a rota
        })
        }catch(err){
            console.log(err)
        }
    }

    // aqui removemos um item de cada vez
    //por isso primeiro recuperamos o id do body
    //e para garantir tambm recuperamos o userid que vem do session
    //na query passamos o id e tambem o user id para garantir que a exclusão é do usuário
    static async removeTought(req,res){
        const id = req.body.id
        const UserId = req.session.userid      
        
        try{
            await Tought.destroy({where:{id:id, UserId:UserId}})
            req.flash('message', 'Pensamento deletado com sucesso')
            req.session.save(()=>{
                res.redirect('/toughts/dashboards')
            })
        }catch(err){
            console.log(err)
        }
    }
}