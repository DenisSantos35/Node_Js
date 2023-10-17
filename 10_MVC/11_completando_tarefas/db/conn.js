const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('mysql conectado com sucesso')
}catch(err){
    console.log('falha na conecção com my sql', err)
}

module.exports = sequelize