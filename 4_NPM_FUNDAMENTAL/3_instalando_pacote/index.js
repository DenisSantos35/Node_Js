const _ = require('lodash') //lodash quando for importar usar o underline(_)

const a = [1,2,3,4,5]
const b = [2,4,6,7,8]

const diff = _.difference(a,b) // verifica em a os numeros que não estão em b

console.log(diff)

