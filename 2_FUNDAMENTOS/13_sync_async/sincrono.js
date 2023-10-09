// uma funcao sincrona ele executa na sequencia os cód

const fs = require("fs")

console.log("inicio")

fs.writeFileSync("arquivo.txt", "oi"); // criar arquivo txt

console.log("Fim")