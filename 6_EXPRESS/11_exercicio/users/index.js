const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

// buscar body

router.use(express.urlencoded({
    extended: true,
}
))

router.use(express.json())

// **** roteamento da login ******************************************
router.get('/login', (req, res)=>{
    res.sendFile(`${basePath}/login.html`)
})

router.post('/save', (req,res) =>{
    const name = req.body.user
    const senha = req.body.senha

    console.log(`Nome: ${name}, Senha: ${senha}`)
    res.sendFile(`${basePath}/login.html`)
})

module.exports = router