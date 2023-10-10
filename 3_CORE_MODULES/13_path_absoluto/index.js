const path = require('path')

// como saber o path absoluto

console.log(path.resolve('teste.txt'))

// formar path

const midFolder = 'relatorios'
const fileName = 'denis.txt'

const finalPath = path.join('/','arquivo',midFolder,fileName) // une variaveis e cria um caminho final

console.log(finalPath)