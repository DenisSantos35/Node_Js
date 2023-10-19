const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')


const app = express()

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//receber resposta do body
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// session middleware -> diz onde o express vai salvar as seções
app.use(
    session({
        session: "session", // renomea a seção
        secret: "nosso_secret", // deixa ela inquebravel ajuda a proteger a seção dos usuários
        resave: false, //caso a seção cai ele desconecta, pode se estabelecer tempo
        saveUninitialized: false,
        store: new FileStore({ // me permite salvar arquivos no servidor
            logFn: function(){},
            path: require('path').join(require('os').tmpdir(), 'sessions'), //chamamos o core module path, e juntamps com os que vai falar apra abir o diretorio temporario da seçao
        }),
        cookie:{
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true, // utuizar para pc local caso seja produçao usar https
        }

    })
)

// flash messages
app.use(flash())

//public path
app.use(express.static('public'))

// set session to res
app.use((req, res, next)=>{
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})

conn.sync()
.then(app.listen(3000))
.catch((err)=> console.log('Erro de conecção'))