const inquirer = require('inquirer') // instalar npm install --save inquirer@^8.0.0 para funcionar este codigo

//chama a bilbioteca e o metodo prompt/ passa se sempre em List<Map> e faz uma promisse
inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    }
]).then(
    (answers) => {
        console.log(answers)
        const media = ((parseInt(answers.p1) + parseInt(answers.p2))/2)
        console.log(`A média é ${media}`)
    }
).catch((err)=> console.log(err));