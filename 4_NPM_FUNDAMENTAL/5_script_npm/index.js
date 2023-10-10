const _ = require('lodash')

const chalck = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)

console.log(chalck.red.bold(diff))

// para verifiacar se ha versao dos pacotes novos -> npm update
// para verifiacar se ha versao de um pacotes especifico novo -> npm update chalk 
//para atulizar o pacote caso esteja desatualizado -> npx npm-check-updates -u // caso necessite apos verificação usar npm install

//no package.json podemos abaixo de test criar codigos executaveis, onde colocamos os seguinte código

//"scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
//    "start": "node index.js"
//  },

// após no terminal basta digitar npm run start que ele rodara a página ao qual foi selecionada para executar