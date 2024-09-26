// Validação de Idade

const pessoa = {

    _idade: 0,

    get idade(){
        return `Nome: ${this.nome}. Idade: ${this._idade}`
    },

    set idade(valor){
        if (valor > 9){
            this._idade = valor
        } else {
            console.log('Idade invalida!')
        }
    },
}

pessoa.nome = 'Ana'
pessoa.idade = 18
pessoa.idade = -68

console.log(pessoa.idade)