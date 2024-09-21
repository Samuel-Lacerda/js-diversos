// Dobrar Números Ímpares e Somar

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const dobraESomaImpares = numeros
    .filter(num => {if(num % 2 != 0) return num})
    .map(num => num * 2)
    .reduce((ac,valor) => ac + valor)


console.log(dobraESomaImpares)