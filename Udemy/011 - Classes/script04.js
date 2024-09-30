// Classe Produto com Validação de Preço

class Produto{
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }

    get preco(){
        this.preco = this._preco
        console.log(`O produto ${this.nome} custa R$:${this.preco}`)
    }

    set preco(valor){
        if(valor >= 0){
            this._preco = valor
            return
        } else{
            console.log('O valor do produto não pode ser menor do que 0.')
            return
        }
    }

}

const produto = new Produto('Geladeira',1500)
produto.preco = -100
console.log(produto)