// ele simula enventos, Observação ela é uma classe intao atribuir com letra maiusccula
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', ()=>{
    console.log("Durante")
})

console.log("Antes")

eventEmitter.emit('start')

console.log("Depois")