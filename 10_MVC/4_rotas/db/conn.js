const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate()
    console.log('Mysql autenticado com sucesso')
}catch(err){
    console.log(`Erro na autenticacao: ${err}`)
}

module.exports = sequelize