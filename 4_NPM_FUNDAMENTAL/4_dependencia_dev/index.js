const _ = require('lodash')

const chalck = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)

console.log(chalck.red.bold(diff))

// para verifiacar se ha versao dos pacotes novos -> npm update
// para verifiacar se ha versao de um pacotes especifico novo -> npm update chalk 
//para atulizar o pacote caso esteja desatualizado -> npx npm-check-updates -u // caso necessite apos verificação usar npm install