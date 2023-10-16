const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'

})

try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso o sequelize')

}catch(err){
    console.log('Não foi possivel conectar: ', err)
}

module.exports = sequelize