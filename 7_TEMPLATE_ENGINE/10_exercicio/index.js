// *********************** requisiçao de pacotes*******************
const express = require('express')
const exphbs = require('express-handlebars')

// ************************* variaveis de hambiente ******************
const app = express()
const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

// ********************* acoplamento da engenharia handlebars ao express **********
app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.use(express.static('public'))

// *********************** rotas ***************************************************

// ******************** rota home page ***********************************************
const products = [
    {
        id: '1',
        name: 'Celular Sansung',
        value: 1500,
        estoq: 5,
        color: 'preto',
        description: 'Este e um produto de otima...',
        model: 'S7',
    },
    {
        id: '2',
        name: 'Celular Motorola',
        value: 1250,
        estoq: 3,
        color: 'Azul',
        description: 'Este e um produto de otima...',
        model: 'Moto G 32'
    },
    {
        id: '3',
        name: 'Celular Apple',
        value: 15000,
        estoq: 15,
        color: 'Verde',
        description: 'Este e um produto de otima...',
        model: 'A15'
    },
    {
        id: '4',
        name: 'LG',
        value: 2000,
        estoq: 8,
        color: 'Cinza',
        description: 'Este e um produto de otima...',
        model: 'LG456'
    }
]

app.get('/products/:id', (req,res)=>{

    const product = products[parseInt(req.params.id) - 1]

    res.render('products', {product})
})


app.get('/initPage', (req, res)=>{   

    res.render('initPage', { products })
})


//**************** rota primeira página ************************************************

app.get('/', (req, res)=>{

    const user = {
        name: "Denis",
        surname: "Santos"
    }

    res.render('home', { user })
})

//  ******************************** calback para conecção ao servidor ***************
app.listen(3000, ()=> console.log('Connection app'))



