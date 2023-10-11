//*************** importação de modulos */
const express = require('express')
const router = express.Router()
const path = require('path')

// ************** criação de pastas base ********************

const basePath = path.join(__dirname, '../templates')

// ler o body**************************************************
// pega a url 
router.use(
    express.urlencoded({
        extended: true,
    })
)

router.use(express.json())

router.get('/add', (req, res)=> {
    res.sendFile(`${basePath}/userform.html`)
})



// rota numero 2 *********************************************
// nesta rota recebemos os dados de um formulario com metodo post
//
router.post('/save',(req, res)=>{
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usário é ${name} e a ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)
})


// rota numero 1*********************************************

// rota numero 3 ************************************************

router.get('/:id', (req,res)=>{
    const id = req.params.id

    // leitura da tabela users, resgatar umusuário do banco
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

// ******************* exprota o modulo ******************************

module.exports = router