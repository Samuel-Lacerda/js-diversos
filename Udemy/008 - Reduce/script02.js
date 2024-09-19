// Soma dos elementos de um array
const numeros = [1, 2, 3, 4, 5]

function somaArray(array) {
    let soma = array.reduce(function (acumulador, valor) {
        return acumulador + valor
    })
    return `Total da soma = ${soma}`
}

console.log(somaArray(numeros))

// Multiplicação dos elementos de um array
function multiplicaArray() {
    let multiplicacao = numeros.reduce(function (acumulador, valor) {
        return acumulador * valor
    })
    return `Total da multiplicação = ${multiplicacao}`
}

console.log(multiplicaArray(numeros))

// Contagem de elementos em um array
const frutas = ['maçã', 'banana', 'laranja', 'maçã', 'banana', 'maçã']

function contarFrequencia() {
    let frequencia = frutas.reduce(function (acumulador, fruta) {

    })
}

contarFrequencia(frutas)