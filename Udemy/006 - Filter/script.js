//Filtrar números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numerosPares = numeros.filter(num => num % 2 == 0)
console.log(numerosPares)

//Filtrar palavras com mais de 4 letras
const palavras = ['sol', 'mar', 'montanha', 'praia', 'chuva']

let palavrasComMaisDeQuatroLetras = palavras.filter( palavra => palavra.length > 4)
console.log(palavrasComMaisDeQuatroLetras)

// Filtrar objetos com idade maior que 18
const pessoas = [
    { nome: 'Ana', idade: 16 },
    { nome: 'João', idade: 22 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Maria', idade: 15 }
  ]

let maioresDeDezoito = pessoas.filter(obj => obj.idade >= 18)
console.log(maioresDeDezoito)

// Filtrar números maiores que um determinado valor
const numeros4 = [10, 25, 30, 15, 40, 50]
const valor4 = 20

let maioresQueValor = numeros4.filter(num => num > valor4)
console.log(maioresQueValor)

// Filtrar valores "truthy"
const valores = [0, 'JavaScript', '', null, 42, undefined, NaN, 'code']

let somenteTrue = valores.filter(Boolean)
console.log(somenteTrue)

//Filtrar produtos disponíveis em estoque
const produtos = [
    { nome: 'Camiseta', preco: 30, estoque: 10 },
    { nome: 'Calça', preco: 80, estoque: 0 },
    { nome: 'Tênis', preco: 120, estoque: 5 },
    { nome: 'Boné', preco: 25, estoque: 0 }
  ]

  let produtodDisponiveis = produtos.filter( obj => obj.estoque > 0)
  console.log(produtodDisponiveis)

  //Filtrar alunos aprovados
  const alunos = [
    { nome: 'Carlos', nota: 6 },
    { nome: 'Amanda', nota: 9 },
    { nome: 'Fernando', nota: 5 },
    { nome: 'Julia', nota: 8 }
  ]

  let alunosAprovados = alunos.filter( aluno => aluno.nota >= 7)
  console.log(alunosAprovados)

  //Filtrar eventos em uma determinada data
  const eventos = [
    { nome: 'Festa', data: '2024-09-15' },
    { nome: 'Show', data: '2024-09-10' },
    { nome: 'Reunião', data: '2024-09-15' },
    { nome: 'Cinema', data: '2024-09-12' }
  ]

  const dataFiltro = '2024-09-15'

  let dataFiltrada = eventos.filter(obj => obj.data == dataFiltro)
  console.log(dataFiltrada)

  //Filtrar números divisíveis por 3
  const numeros9 = [1, 3, 6, 8, 9, 12, 14, 15]

  let divisiveisPorTres = numeros9.filter(num => num % 3 == 0)
  console.log(divisiveisPorTres)