const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'name',
    message: "Digite seu nome",
},
{
    name: "age",
    message: 'Digite sua idade'
}
]).then(
    (answers) => {
        if(!answers.nome || !answers.age){
            throw new Error("O nome e a idade são obrigatórios");
        }
        console.log(chalk.bgYellow.black(`Nome usuário: ${answers.name},\nIdade usuário: ${parseInt(answers.age)}`))
    }
).catch((error)=> console.log(error))