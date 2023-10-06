// sempre colocar ./, exportacao de um modulo de outra página
const meuModulo = require('./meu_modulo') 
const soma = meuModulo.soma
const subtracao = meuModulo.subtracao

soma(10,15)
soma(2,3)
subtracao(15,10)
