const readlineSync = require ('readline-sync')

const numero: number = readlineSync.questionInt('Digite um número:')

for (let i = 1; i <= 10; i++) {
	console.log(`${numero} x ${i} = ${numero * i}`)

}

