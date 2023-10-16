const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '1234',{ //passa nome do banco, user, senha, objeto{local, banco}
    host: 'localhost',
    dialect: "mysql"
} )

// try{
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso o Sequelize')

// }catch(err){
//     console.log('Não foi possivel conectar', err)
// }

module.exports = sequelize