const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// rotas - endpoints
app.post('/createproduct', (req, res)=>{
    const name = req.body.name
    const price = req.body.price
    const id = req.body.id

    console.log(name, price)

    res.json({message: `O produto ${name}, preco R\$ ${price} id do cliente: ${id} foi criado com sucesso`})
})

app.get('/', (req, res)=>{
    res.json({message: 'Primeira rota cirada com sucesso!'})
})

app.listen(3000)