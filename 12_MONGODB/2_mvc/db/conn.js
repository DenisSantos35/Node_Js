const { MongoClient } = require('mongodb')

// url para conecao com mongo db
const uri = "mongodb://localhost:27017/testemongodb2"

//instancia do mongo passando a url para cliente
const client = new MongoClient(uri)

//funcao de conecção
async function run(){
    try{
        await client.connect()
        console.log('conectado ao mongodb')
    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client

