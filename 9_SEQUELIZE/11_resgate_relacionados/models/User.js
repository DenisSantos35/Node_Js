 //importar o datatypes do pacote sequelize
 const {DataTypes} = require('sequelize')

 //importar a conecção do sequelize com o banco
 const db = require('../db/conn')

 //criar modelo do banco
 const User = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation:{
        type: DataTypes.STRING,
        required: true,
    },
    newsLetter:{
        type: DataTypes.BOOLEAN
    }
 })

 module.exports = User