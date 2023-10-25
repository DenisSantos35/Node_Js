const { MongoClient } = require('mongodb')

//declara url de coneccao
const uri = "mongodb://localhost:27017/testemongodb2"

//instancia o mongo
const client = new MongoClient(uri)

// faz funcao de conecção
async function run(){
    try{
        await client.connect()
        console.log("conectando ao mongodb")

    }catch(err){
        console.log(err);
    }
}

run()

module.exports = client

