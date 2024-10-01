// Adicionar métodos e propriedades à subclasse

class Veiculo{
    constructor(marca,ano){
        this.marca = marca
        this.ano = ano
    }
}

class Carro extends Veiculo{
    constructor(marca,ano,modelo,preco){
        super(marca,ano)
        this.modelo = modelo
        this.preco = preco
    }

    exibirDetalhes(){
        console.log(`Carro da marca ${this.marca}, ano ${this.ano}, modelo ${this.modelo}. O veiculo custa ${this._preco}`)
    }

    set preco(valor){
        if(valor >= 0){
            this._preco = valor
            return
        }
        console.log('Veiculo não pode custar menos do que 0.')
    }


    aplicaDesconto(){
        let desconto = this._preco * 0.9
        this._preco = desconto
    }

}

const carro = new Carro('GM',2016,'Onix',60000)
console.log(carro)
carro.preco = -10
carro.exibirDetalhes()
carro.aplicaDesconto()
carro.exibirDetalhes()
console.log(carro)
