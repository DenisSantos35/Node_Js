// nome

// o comando process argv, mostra o executavel, arquivo que esta executando, e o argumentp
console.log(process.argv);

//const [executavel, arquivo, argumento] = [process.argv[0], process.argv[1], process.argv[2]]

const argv = process.argv.slice(2)

console.log(argv)

const nome = argv[0].split("=")[1]

console.log(nome)

const idade = argv[1].split("=")[1]

console.log(`O nome dele é ${nome} e ele tem ${idade}`)

