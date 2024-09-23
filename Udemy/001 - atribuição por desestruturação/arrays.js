// Troca de variáveis
let x = 10
let y = 20

let troca = [x, y] = [y, x]
console.log(x, y)

// Ignorar valores
const numeros = [1, 2, 3, 4, 5]

const desestruturacao = [primeiro,,terceiro] = numeros

console.log(primeiro, terceiro)

// Rest operator
const frutas = ['maçã', 'banana', 'laranja', 'manga']

const desesFrutas = [primeiraFruta,...outrasFrutas] = frutas

console.log(primeiraFruta)
console.log(outrasFrutas)

// Valores padrão
const cores = ['vermelho']

const desesCores = [cor1, cor2 = 'azul'] = cores
console.log(cor1, cor2)