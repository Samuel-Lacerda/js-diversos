// Classe ContaBancaria

class ContaBancaria{
    constructor(titular,saldo){
        this.titular = titular
        this._saldo = saldo
    }

    get saldo(){
        console.log(`Saldo: ${this._saldo}`)
    }

    set depositar(valor){
        this._saldo += valor
    }

    set sacar(valor){
        if(valor > this._saldo){
            console.log('Saldo insuficiente.')
            return
        }
        this._saldo -= valor
    }

}

const c1 = new ContaBancaria('Samuel',100)
console.log(c1)
c1.depositar = 100
console.log(c1)
c1.sacar = 50
console.log(c1)
c1.sacar = 200

