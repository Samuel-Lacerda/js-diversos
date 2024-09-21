// Somar Idades Maiores que 30
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 35 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Carlos', idade: 50 }
]

const SomaMaioresDe30 = pessoas
    .filter(obj => obj.idade > 30)
    .map(obj => obj.idade)
    .reduce((ac, valor) => ac + valor)

console.log(SomaMaioresDe30)