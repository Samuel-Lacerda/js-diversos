// Object.defineProperty()

function Carro(marca, ano, preco) {
    Object.defineProperty(this, 'marca', {
        value: marca,
        writable: true,
        enumerable: true,
        configurable: true
    })

    Object.defineProperty(this, 'ano', {
        value: ano,
        writable: false,
        enumerable: true,
        configurable: false
    })

    Object.defineProperty(this, 'preco', {
        value: preco,
        writable: true,
        enumerable: true,
        configurable: true
    })
}

const carro = new Carro('Toyota','2022','50000')

console.log(carro)

carro.ano = 'Isso não deve ser alterado'
carro.marca = 'Fiat'
carro.preco = 30000

console.log(carro)