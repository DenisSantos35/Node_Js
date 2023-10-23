const { raw } = require('express')
const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtsController{
    static async showToughts(req,res){
        res.render('toughts/home')
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
        console.log(toughts)

        res.render('toughts/dashboards', {toughts})
    }
    // aqui renderizamos na tela do usuário a pagina de criação
    static createTought(req, res){
        res.render('toughts/create') //quando e render voce passa o diretorio e o arquivo
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