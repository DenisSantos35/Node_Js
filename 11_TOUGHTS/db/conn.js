const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("toughts2", "root", "1234",{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conecao com mysql feita com sucesso')

}catch(err){
    console.log('Não foi possivel conectar ao banco')
}


module.exports = sequelize