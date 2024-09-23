// Extração de propriedades
const pessoa = { nome: 'Carlos', idade: 28, cidade: 'São Paulo' }

const desesPessoa = { nome, idade } = pessoa

console.log(nome, idade)

// Renomeando propriedades
const livro = { titulo: '1984', autor: 'George Orwell', ano: 1949 }

const trocaTitulo = { titulo: nomeDoLivro } = livro

console.log(nomeDoLivro)

// Valores padrão:
const produto = { nome: 'Camiseta', preco: 29.99 }

const valoresPadroes = { nome, preco, estoque = '100' } = produto

console.log(nome, preco, estoque)

// Desestruturação aninhada
const aluno = { nome: 'Ana', endereco: { cidade: 'Recife', estado: 'PE' } }

const desesAluno = { nome, endereco:{cidade,estado}} = aluno

console.log(nome, cidade, estado)