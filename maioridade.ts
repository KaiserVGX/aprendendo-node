const readline = require('readline-sync')

const idade = readline.questionInt('Digite sua idade:')
const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"

console.log(resultado)
