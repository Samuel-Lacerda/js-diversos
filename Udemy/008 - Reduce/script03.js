// Somar os Valores de um Array
const numeros = [10, 20, 30, 40, 50]

function somarValores(array) {
    let res = numeros.reduce(function (acumulador, valor) {
        acumulador += valor
        return acumulador
    })
    return res
}

console.log(somarValores(numeros))

// Contar a Frequência de Elementos em um Array
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']

function contaFrutas(array) {
    let res = array.reduce(function (acumulador, fruta) {
        acumulador[fruta] = (acumulador[fruta] || 0) + 1
        return acumulador
    }, {})
    return res
}

console.log(contaFrutas(frutas))

// Encontrar o Maior Número
const numerosEx3 = [5, 12, 7, 3, 25, 10]

function encontraMaior(array) {
    let res = array.reduce(function (acumulador, num) {
        if (acumulador < num) {
            acumulador = num
            return acumulador
        }
        return acumulador
    }, 0)
    return res
}

console.log(encontraMaior(numerosEx3))

// Agrupar Itens por Categoria
const pessoas = [
    { nome: 'João', cidade: 'São Paulo' },
    { nome: 'Maria', cidade: 'Rio de Janeiro' },
    { nome: 'Ana', cidade: 'São Paulo' },
    { nome: 'Pedro', cidade: 'Rio de Janeiro' },
    { nome: 'Paulo', cidade: 'Belo Horizonte' }
]

function separaPorCidade(array) {
    let res = array.reduce(function (acumulador, valor) {
        if (!acumulador[valor.cidade]) {
            acumulador[valor.cidade] = []
        }

        acumulador[valor.cidade].push(valor.nome)
        return acumulador

    }, {})
    return res
}

console.log(separaPorCidade(pessoas))

// Calcular a Média de um Array de Números
const notas = [8, 7, 6, 10, 9]

function calcularMedia(array){
    let total = notas.reduce(function(acumulador, nota){
        acumulador += nota
        return acumulador
    })
    let media = total / array.length
    return media
}

console.log(calcularMedia(notas))

// Concatenar Strings
const palavras = ['Eu', 'estou', 'aprendendo', 'JavaScript']

function concatenaString(array){
    let res = array.reduce(function(acumulador,palavra){
        acumulador += palavra + ' '
        return acumulador
    },'')
    return res
}

console.log(concatenaString(palavras))

// Filtrar e Somar Números Pares
const numerosEx7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somaPares(array){
    let res = array.reduce(function(acumulador, valor){
        if(valor % 2 === 0){
            acumulador += valor
            return acumulador
        }
        return acumulador
    },0)
    return res
}

console.log(somaPares(numerosEx7))