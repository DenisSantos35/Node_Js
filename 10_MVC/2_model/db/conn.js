const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate()
    console.log(`Conecção com mysql feita com sucesso`)
}catch(err){
    console.log(`Nao foi possivel conectar ao banco: ${err}`)
}


module.exports = sequelize

