const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '1234',{
    host:'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log(`Conectamos ao mysql`)

}catch(err){
    console.log(`Não foi possivel conectar: ${err}`)
}


exports.default = sequelize