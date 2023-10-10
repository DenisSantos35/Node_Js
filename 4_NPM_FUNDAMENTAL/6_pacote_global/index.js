// instalando globalmente pacote
// para instalação global utilizamos o comando npm install -g lodash
// no caso instalamos o lodash no seguinte caminho
//PS C:\Users\DENIS\Documents\GitHub\Node_Js\4_NPM_FUNDAMENTAL\6_pacote_global>

//se executar vai ver o erro, pois o lodash precisa de seus arquivos para ser executado
//para fazer a copia do modulo global para o projeto utilizamos o seguinte comando
//npm link lodash

const _ = require('lodash')

const arr = [1, 2, 2, 3, 3, 4, 4, 5]

console.log(_.sortedUniq(arr)) // gerar um array com numeros nao repetidos[ 1, 2, 3, 4, 5 ]

