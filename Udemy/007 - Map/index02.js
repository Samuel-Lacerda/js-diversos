// Dobrar os valores de um array
const numeros = [2, 5, 10, 20, 50]

const numerosDobrados = numeros.map(num => num * 2)
console.log(numerosDobrados)

// Converter para maiúsculas
const frutas = ['maçã', 'banana', 'uva', 'laranja']

const frutasMaisculas = frutas.map(item => item.toUpperCase())
console.log(frutasMaisculas)

// Extrair nomes de objetos
const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'Carlos', idade: 35 },
    { nome: 'Maria', idade: 22 }
  ]

  const apenasNomes = pessoas.map(obj => obj.nome)
  console.log(apenasNomes)

// Adicionar um campo calculado
const produtos = [
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Calça', preco: 100 },
    { nome: 'Sapato', preco: 150 }
  ]

  const insereDesconto = produtos.map(function(obj){
    obj.precoComDesconto = obj.preco * 0.9
    return obj
  })
  console.log(insereDesconto)

// Criar frases com os elementos
const cidades = ['Paris', 'Nova York', 'Tóquio', 'Sydney']
 
const cidadesComFrase = cidades.map(item => `Eu quero visitar ${item}.`)
console.log(cidadesComFrase)

// Converter preços para outra moeda
const valorEmReal = [10, 20, 30, 40]
let cotacaoDolar = 5.6

const valorEmDolar = valorEmReal.map(valor => valor * cotacaoDolar)
console.log(valorEmDolar)

// Criar um novo array com o quadrado dos números
const numeros7 = [1, 2, 3, 4, 5]

const quadrado = numeros7.map(num => num * num)
console.log(quadrado)

// Concatenar com índice
const cores = ['vermelho', 'verde', 'azul']

const insireIndice = cores.map(function(valor, indice, array){
    return valor = `${indice}: ${valor}`
    
})
console.log(insireIndice)

// Converter idades para anos de nascimento
const idades = [25, 30, 35, 40]
let anoAtual = 2024
 
const anoDeNascimento = idades.map(idade => anoAtual - idade)
console.log(anoDeNascimento)

// Transformar em booleanos
const numeros10 = [5, 12, 8, 20, 15]

const maiorDe10EmBooleano = numeros10.map(function(num){
    if (num > 10){
        return true
    } else {
        return false
    }
})

console.log(maiorDe10EmBooleano)