// Preço Total de Produtos Caros

const produtos = [
    { nome: 'Celular', preco: 150 },
    { nome: 'Fone de Ouvido', preco: 50 },
    { nome: 'Teclado', preco: 120 },
    { nome: 'Monitor', preco: 200 },
    { nome: 'Mouse', preco: 80 }
]

const precoTotalItensCaros = produtos.
    filter(obj => obj.preco >= 100)
    .map(obj => obj.preco)
    .reduce((ac, valor) => ac + valor)


console.log(precoTotalItensCaros)