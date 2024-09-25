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
            get() {
                if (this._preco >= 0){
                    return this._preco;
                } else {
                    console.log('Valor inválido, o preço não pode ser menor que 0.');
                }
            },
            set(valor) {
                if (valor >= 0) {
                    this._preco = valor;
                } else {
                    console.log('Valor inválido, o preço não pode ser menor que 0.');
                }
            },
            enumerable: true,
            configurable: false
        }
    })
    
    this._preco = preco

}

const produto = new Produto('Notebook', 'Computadores', -2000)
console.log(produto.nome)
console.log(produto.categoria)
console.log(produto.preco)
