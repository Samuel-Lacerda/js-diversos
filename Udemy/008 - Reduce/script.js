const pessoas = [
    { nome: 'Luiz', idade:62},
    { nome: 'Maria', idade:23},
    { nome: 'Eduardo', idade:55},
    { nome: 'Leticia', idade:10},
    { nome: 'Rosana', idade:64},
    { nome: 'Wallace', idade:63},
]

let maisVelho = pessoas.reduce(function(pessoaAtual,proximaPessoa){
    if (pessoaAtual.idade > proximaPessoa.idade) { return pessoaAtual }
    return proximaPessoa
})

console.log(`A pessoa mais velha é ${maisVelho.nome}, com ${maisVelho.idade} anos!`)