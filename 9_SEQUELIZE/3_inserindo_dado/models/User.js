const {DataTypes } = require('sequelize') //importar o datatypes do pacote sequelize

const db = require('../db/conn') //importar a conecção do sequelize com o banco

const User = db.define('User',{ //criar modelo do banco
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsLetter:{
        type: DataTypes.BOOLEAN,
    },
})

module.exports = User