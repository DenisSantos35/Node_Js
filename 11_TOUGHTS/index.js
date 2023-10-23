const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')



// models
// exportacao do Tought
const Tought = require('./models/Tought')
const User = require('./models/User')

//import routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

//import controller
const ToughtsController = require('./controllers/ToughtController')

const app = express()

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//receber resposta do body
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// session middleware -> diz onde o express vai salvar as seções
/*
    app.use(: Isso indica que o trecho de código a seguir está sendo usado como um middleware no Express.js, o que significa que ele será executado para cada requisição recebida pela sua aplicação.
    session({: Aqui, você está configurando o middleware de sessão. O session é uma função que configura e gerencia sessões para o Express.js.
    session: "session",: Isso define o nome da sessão como "session". Cada sessão é identificada por um nome exclusivo, e neste caso, a sessão é nomeada "session".
    secret: "nosso_secret",: Define uma chave secreta ("secret") que é usada para assinar os cookies de sessão. Isso torna a sessão mais segura, pois os cookies não podem ser facilmente manipulados por terceiros.
    resave: false,: Quando definido como false, isso significa que a sessão não será automaticamente salva no servidor a cada requisição, a menos que haja alterações na sessão. Isso economiza recursos do servidor.
    saveUninitialized: false,: Isso evita que sessões não inicializadas sejam salvas. Sessões não inicializadas são aquelas que foram criadas, mas não tiveram nenhum dado armazenado nelas.
    tore: new FileStore({: Aqui, você está configurando o local onde as informações de sessão serão armazenadas. Neste caso, está sendo usado o FileStore, que permite salvar os dados de sessão em arquivos no servidor.
    logFn: function(){},: Define uma função vazia como log para o FileStore. Isso significa que o armazenamento em arquivos não gerará logs.
    path: require('path').join(require('os').tmpdir(), 'sessions'),: Define o caminho no servidor onde os arquivos de sessão serão armazenados. Ele utiliza o módulo path para criar o caminho, combinando o diretório temporário do sistema operacional (obtido a partir de os.tmpdir()) com a pasta "sessions".

    cookie:{: Aqui, você está configurando os atributos dos cookies de sessão que serão enviados para o cliente.
    secure: false,: Define se o cookie só deve ser transmitido por conexões seguras (HTTPS). Quando definido como false, o cookie também será transmitido em conexões HTTP não seguras.
    maxAge: 360000,: Define o tempo máximo de vida do cookie de sessão em milissegundos. Neste caso, ele expirará após 360 segundos (ou 6 minutos).
    expires: new Date(Date.now() + 360000),: Define a data de expiração do cookie. Ele expira após 360 segundos a partir do momento da criação da sessão.
    httpOnly: true,: Quando definido como true, o cookie só pode ser acessado por meio de solicitações HTTP e não é acessível através de scripts no lado do cliente. Isso aumenta a segurança da sessão.    
*/
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
            maxAge: 3600000,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true, // utuizar para pc local caso seja produçao usar https
        }

    })
)

// flash messages
app.use(flash()) // recebe uma resposta do sistema

//public path
app.use(express.static('public'))

// set session to res
app.use((req, res, next)=>{
    // verifica se o usuário tem a sessão
    if(req.session.userid){
        // faz com que obtenhamos o id do usuário em todas as seções
        res.locals.session = req.session
    }

    next()
})

// aqui chama o nome do diretorio da view depois de / e de onde vem as rotas routes
app.use('/toughts', toughtsRoutes)

// para na / usar a pagina principal
app.get('/', ToughtsController.showToughts)

//chama diretorio auth
app.use('/', authRoutes)


conn
.sync()
//.sync({force:true})
.then(app.listen(3000))
.catch((err)=> console.log('Erro de conecção'))