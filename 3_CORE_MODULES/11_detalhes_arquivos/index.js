const fs = require('fs')

fs.stat('pasta',(err,stats)=>{
    if(err){
       console.log(err)
       return 
    }else{
        console.log(stats.isFile()) // arquivo
        console.log(stats.isDirectory()) // é um diretorio
        console.log(stats.isSymbolicLink()) // é um link simbolico
        console.log(stats.ctime) // data cricação
        console.log(stats.size) // tamanho arquivo

    }
})