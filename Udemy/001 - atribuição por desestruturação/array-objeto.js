// Combinação de Arrays e Objetos
const pessoas = [
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 20, cidade: 'Belo Horizonte' }
]

const dadosSegundaPessoa = { nome, cidade } = pessoas[1]

console.log(nome, cidade)

const todasIdades = armazenaIdades(pessoas)

console.log(todasIdades)

function armazenaIdades(array) {
    return array.reduce((ac, valor) => {
        ac.push(valor.idade)
        return ac
    }, [])
}
