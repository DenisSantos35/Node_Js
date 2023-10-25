const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/createproduct', (req, res)=>{
    const name = req.body.name
    const price = req.body.price
    const id = req.body.id

    if(!name){
        res.status(422).json({messate: "O campo nome é obrigatório"})
        return
    }

    res.status(201).json({message: `O produto ${name} no valor de R\$ ${price} foi criado com sucesso`})
})

app.get('/', (req, res)=>{
    res.status(200).json({message: "Primeira mensagem rota criada com sucesso!"})
})

app.listen(3000)