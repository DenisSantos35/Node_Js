const mysql = require('mysql')
const senha = '1234'
const database = 'nodemysql2'

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: database
})

module.exports = pool

// neste metodo utilizamos cash para conseguir requisições mais rapidas
// e limito o tempo matando caso fique conectando e não ache