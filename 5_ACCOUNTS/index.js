// modulos externos 
const inquirer = require('inquirer')
const chalk = require('chalk')


//modulos internos
const fs = require('fs')

// *************** auto invocação da função operation ****************************
operation()

// ******************* funcao que contem a tela de menu do sitema ****************
// ********************* e coleta de açoes do usuário ****************************
function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar', 
                'Sair'
            ]
        }
    ]).then((answer)=>{
        const action = answer.action    
        if(action === 'Criar Conta'){
            createAccount()
        }else if(action === 'Consultar Saldo'){
            getAccountBalance()
        }else if(action === 'Depositar'){
            deposit()
        }else if(action === 'Sacar'){
            whitdraw()
        }else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts'))
            setTimeout(()=>{
                process.exit()
            }, 1000)
            
        }
    })
    .catch((err) => console.log(err))
}

// *************** create an account *******************************************
function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso Banco!'))
    console.log(chalk.green('Defina as opções da conta a seguir'))
    buildAccount()
}

function buildAccount(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para sua conta:'
        
    }]).then((answer) =>{
        const accountName = answer.accountName
        console.info(answer.accountName)

        //***** se nao existir o diretorio cria o **************************************

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        // ******** se este caminho existir retorna uma mensagem e reinicia a criação de conta

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Está conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }

        // ************** escreva dentro do direterio um novo arquivo json, e inicie dentro dele um balanço
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err){
            console.log(err)
        },
        )
        console.log(chalk.green('Parabéns, a sua conta foi criada com sucesso'))
        // *********** chama novamente o menu *********************************************************
        operation()

    } ).catch((err)=> console.log(err))
}

// add an amount to user account

function deposit(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta'
    }]).then((answer)=>{
        const accountName = answer.accountName

        // verify if account existis
        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto voce deseja depositar?'
        }]).then((answer)=>{
            const amount = answer.amount

            // add an amout
            addAmount(accountName, amount)

            operation()


        }).catch((err)=>console.log(err))


        
    }).catch((err) => console.log(err))
}

// ********** nesta funcao recebemos o nome daconta ao qual sera verificada no sistema dentro de um diretorio
//********** se ha ou não a existencia do arquivo em formato json, caso nao exista retornara um valor false
// ************caso exista retornara true
function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed('Está conta não existe'))    
        return false    
    }
    return true
}

// **************************** funcao para adicionar valores ***************************************************
function addAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!"))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFile(`accounts/${accountName}.json`, JSON.stringify(accountData), function(err,){
        console.log(err)
    })

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta`))   
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

// ******************* show account balance **********************************************************************
function getAccountBalance(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer)=>{
        const accountName = answer.accountName
        // verify if accounts exists
        if(!checkAccount(accountName)){
            return getAccountBalance()
        }
        const accountData = getAccount(accountName)
        console.log(chalk.bgBlue.black(`Seu saldo atual é: R$${accountData.balance}`))
        setTimeout(()=>{
            operation()
        },2000)
    }).catch((err)=> console.log(err))
}

// ****************************** sacar dinheiro ***********************************************************************
// withdrawn an amount from user account

function whitdraw(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer)=>{
        const accountName = answer.accountName

        if(!checkAccount(accountName)){
            return whitdraw()
        }

        inquirer.prompt([{
            name:'amount',
            message:'Quanto você deseja sacar?'
        }]).then((answer)=>{
            const amount = answer.amount

            removeAmount(amount, accountName)

        }).catch((err)=> console.log(err))


    }).catch((err)=> console.log(err))
}


function removeAmount(amount, accountName){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'),)
        return whitdraw()
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black('Valor indisponível'))
        return whitdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), function(err){
        console.log(err)
    })

    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta`))

    operation()

}
