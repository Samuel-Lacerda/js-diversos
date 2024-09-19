const pessoas =[ 
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const apenasNomes = pessoas.map(obj => obj.nome)
const apenasIdades = pessoas.map(obj => obj.idade)
const criaId = pessoas.map(function(obj,indice){
    const newObj = {...obj}
    newObj.id = indice + 1
    return newObj
})

console.log(apenasNomes)
console.log(apenasIdades)
console.log(criaId)
