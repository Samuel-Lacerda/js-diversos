// Converter para Maiúsculas e Contar Caracteres

const nomes = ['joao', 'maria', 'ana', 'pedro', 'carlos']

const conversorEContador = nomes
    .map(item => item.toUpperCase())
    .filter(item => item.length >= 5)
    .map(item => item.length)
    .reduce((ac,valor) => ac + valor)

console.log(conversorEContador)