const fs = require('fs') //file System biblioteca para ler arquivo

// da clase file system ler o arquivo txt, linguagem padrão, erowfunction que retorna um erro caso nã haja nada ou um dado
fs.readFile('arquivo.txt', 'utf8', (err, data) => { 
    if(err){
        console.log(err);
    }
    console.log(data);
});