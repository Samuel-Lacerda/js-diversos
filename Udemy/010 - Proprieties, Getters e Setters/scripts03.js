// Utilizando Getters e Setters em Função Construtora

function Pessoa(nome, idade) {
    Object.defineProperty(this, nome, {
        get(){
            
        }
    })

    Object.defineProperty(this, idade, {
        get() {
            if (idade > 0) {
                return this._idade
            } else {
                console.log('Valor inválido. A idade não pode ser menor ou igual a 0.')
            }
        },
        set(novaIdade) {
            if (idade > 0) {
                this._idade = novaIdade
            } else {
                console.log('Valor inválido. A idade não pode ser menor ou igual a 0.')
            }
        },
        enumerable: true,
        configurable: false
    })
}

const pessoa = new Pessoa('Samuel', 25)
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)