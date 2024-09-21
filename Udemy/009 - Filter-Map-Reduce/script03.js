// Contar Letras em Palavras com Mais de 4 Letras

const palavras = ['carro', 'bicicleta', 'avião', 'barco', 'trem']

const contaLetras = palavras
    .filter(item => {if(item.length > 4) return item})
    .map(item => item.length)
    .reduce((ac, valor) => ac + valor)

console.log(contaLetras)