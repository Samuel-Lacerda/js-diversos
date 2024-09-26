// Produto com Preço

const produto = {
    _preco: 0,

    get preco(){
        return `Produto: ${this.nome}. Preço: ${this._preco}`
    },

    set preco(valor){
        if(valor > 0){
            this._preco = valor
        } else {
            console.log('Produto não pode ser menor do que 0.')
        }
    }
}

produto.nome = 'Bateria'
produto.preco = -10
console.log(produto.nome)
console.log(produto.preco)