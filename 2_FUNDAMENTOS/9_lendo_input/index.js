//o comando readline nos permite fazer testes de leitura e excrita em nosso programa
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let text = ""

readline.question('Qual a sua linguagem preferida? ', (language) => {
    if(language === 'Python'){
        console.log('Isso nem é linguagem')
    }else{
        console.log(`A minha linguagem preferida é:  ${language}`)    
        text = language
    }
    readline.close()
    
})

console.log(text)
