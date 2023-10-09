const fs = require('fs')

const oldArqui = 'nesArquivo.txt'
const newArq = 'newArquivo.txt'

fs.rename(oldArqui, newArq , (err)=>{
    if(err){
        console.log("erro ao renomear")
        return
    }
    console.log('Arquivo alterado');
});

