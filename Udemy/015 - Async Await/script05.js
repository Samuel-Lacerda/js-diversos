// Simulando Múltiplas Operações Assíncronas

async function buscarProduto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Produto: Televisão')
        }, 1000);
    })
}

async function buscarPreco() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Preço: R$ 3.000')
        }, 1200)
    })
}

async function exibirDados(){
    try{
        let produto = await buscarProduto()
        console.log(produto)

        let preco = await buscarPreco()
        console.log(preco)

    } catch (erro){
        console.log(erro)
    }
}

exibirDados()