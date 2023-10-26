const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'booksAlura'
})

conn.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('conectado ao banco mysql')
})

module.exports = conn