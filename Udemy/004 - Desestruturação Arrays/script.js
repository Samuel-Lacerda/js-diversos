//Desestruturação simples 
let cores = ['vermelho', 'verde', 'azul', 'amarelo']

let resCores1 = [primeiraCor1, segundaCor2, terceiraCor1] = cores
console.log(primeiraCor1,segundaCor2,terceiraCor1)

//Ignorar elementos

let resCores2 = [primeiraCor2,,terceiraCor2] = cores
console.log(primeiraCor2,terceiraCor2)

// Valores padrão
let frutas = ['maçã', 'banana']

let resFrutas = [primeiraFruta, segundaFruta, terceiraFruta = 'abacaxi'] = frutas
console.log(primeiraFruta,segundaFruta,terceiraFruta)

//Operador rest (...)
let numeros = [1, 2, 3, 4, 5, 6, 7]

let resNumeros = [primeiroNumero, segundoNumero, ...resto] = numeros
console.log(primeiroNumero,segundoNumero,resto)

