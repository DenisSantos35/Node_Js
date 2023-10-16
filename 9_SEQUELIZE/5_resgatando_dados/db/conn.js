const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('conectado com sucesso ao sequelize')
}catch(err){
    console.log('Erro ao conectar', err)
}

module.exports = sequelize
