// Multiplicar Números Pares e Somar

const numeros = [2, 4, 5, 6, 7, 8, 10]

const multiplaESomaPares = numeros
    .filter(num => { if (num % 2 === 0) return num })
    .map(num => num * 3)
    .reduce((ac, valor) => ac + valor)

console.log(multiplaESomaPares)