// Soma dos elementos de um array
const numeros = [1, 2, 3, 13, 45, 7, 4, 5]

function somaArray(array) {
    let soma = array.reduce(function (acumulador, valor) {
        return acumulador + valor
    })
    return `Total da soma = ${soma}`
}

console.log(somaArray(numeros))

// Multiplicação dos elementos de um array
function multiplicaArray(array) {
    let multiplicacao = array.reduce(function (acumulador, valor) {
        return acumulador * valor
    })
    return `Total da multiplicação = ${multiplicacao}`
}

console.log(multiplicaArray(numeros))

// Contagem de elementos em um array
const frutas = ['maçã', 'banana', 'laranja', 'maçã', 'banana', 'maçã']

function contarFrequencia(array) {
    let frequencia = array.reduce(function (acumulador, fruta) {
        acumulador[fruta] = (acumulador[fruta] || 0) + 1
        return acumulador
    }, {})
    return frequencia
}

console.log(contarFrequencia(frutas))


// Encontrar o maior número de um array
function encontrarMaior(array) {
    let encontraMaior = array.reduce(function (acumulador, valor) {
        if (acumulador < valor) {
            acumulador = valor
            return acumulador
        }
        else {
            return acumulador
        }
    }, 0)

    return encontraMaior
}

console.log(encontrarMaior(numeros))

// Concatenar palavras em uma frase
const palavras = ['Aprender', 'JavaScript', 'é', 'muito', 'bão']

function formarFrase(array) {
    let fraseCompelta = array.reduce(function (acumulador, palavra) {
        acumulador += ` ${palavra}`
        return acumulador
    },)

    fraseCompelta += '.'
    return fraseCompelta
}

console.log(formarFrase(palavras))

// Somar propriedades de um array de objetos
const produtos = [
    { nome: 'Camisa', preco: 25 },
    { nome: 'Calça', preco: 40 },
    { nome: 'Sapato', preco: 60 }
]

function somaPrecos(array) {
    let soma = array.reduce(function (acumulador, valor) {
        acumulador += valor.preco
        return acumulador
    }, 0)

    return soma
}

console.log(somaPrecos(produtos))

// Contar palavras em uma frase
const frase = "JavaScript é legal e aprender JavaScript é divertido"

function contarPalavras(frase) {
    let array = frase.split(' ')
    let contadorPalavras = array.reduce(function (acumulador, palavra) {
        acumulador[palavra] = (acumulador[palavra] || 0) + 1
        return acumulador
    }, {})

    return contadorPalavras
}

console.log(contarPalavras(frase))

// Aplanar um array de arrays
const arrays = [[1, 2], [3, 4], [5, 6]]

function aplanarArray(conjuntoArrays) {
    let aplanagem = conjuntoArrays.reduce(function (acumulador, valor) {
        acumulador.push(...valor)
        return acumulador
    },)

    return aplanagem
}

console.log(aplanarArray(arrays))

// Filtrar e somar números pares de um array
const numerosEx9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function somarNumerosPares(array) {
    let somaPares = array.reduce(function (acumulador, valor) {
        if (valor % 2 == 0) {
            acumulador += valor
            return acumulador
        }
        return acumulador
    }, 0)

    return somaPares
}

console.log(somarNumerosPares(numerosEx9))


// Agrupar pessoas por idade
const pessoasEx10 = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 30 },
    { nome: 'Pedro', idade: 20 }
]

function agruparPorIdade(array) { 
    let grupos = array.reduce(function(acumulador,pessoa){
        if (acumulador[pessoa.idade]){
            acumulador[pessoa.idade].push(pessoa.nome) 
        } else {
            acumulador[pessoa.idade] = [pessoa.nome]
        }
        return acumulador
    },{})

    return grupos
}

console.log(agruparPorIdade(pessoasEx10))