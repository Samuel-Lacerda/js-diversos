//Remover elementos
let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga']

frutas.splice(1,2)
console.log(frutas)

//Substituir elementos
let cores = ['vermelho', 'azul', 'verde', 'amarelo', 'roxo']

cores.splice(0,2,'Preto','Laranja')
console.log(cores)

//Adicionar elementos
let numeros = [1, 2, 3, 4, 5, 6]

numeros.splice(2,0,7,8)
console.log(numeros)

//Remover e adicionar elementos
let cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Belo Horizonte', 'Salvador']

cidades.splice(3,Number.MAX_VALUE)
console.log(cidades)

//Usar .splice() para clonar parte de um array
let paises = ['Brasil', 'Argentina', 'Chile', 'Uruguai', 'Paraguai']
console.log(paises)

let paisesFiltrados = paises.splice(3,Number.MAX_VALUE)
console.log(paisesFiltrados)