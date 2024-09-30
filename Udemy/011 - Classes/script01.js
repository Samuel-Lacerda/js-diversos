// Classe Pessoa com get e set

let _partes = ''

class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }

    set nomeCompleto(valor){
        _partes = valor.split(' ')
        this.nome = _partes[0]
        this.sobrenome = _partes.slice(1).join(' ')
        console.log(_partes)
    }

}

const p1 = new Pessoa('Samuel','Lacerda')

console.log(p1)
p1.nomeCompleto = 'Pedro Dias da Silva'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)