// Object.defineProperties()

function Produto(nome, categoria, preco) {
    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable: true,
            enumerable: true,
            configurable: true
        },

        categoria: {
            value: categoria,
            writable: false,
            enumerable: true,
            configurable: false
        },

        preco: {
            get(){
                return this.preco
            },

            set(novoPreco){
                if(novoPreco < 0){
                    console.log('Valor inválido. Não pode ser menor do que 0.')
                }
                this.preco = novoPreco
            },

            enumerable: true,
            configurable: true
        }
    })
}

const produto = new Produto('Notebook','Computadores', 2000)
console.log(produto.nome)
console.log(produto.categoria)
console.log(produto.preco)