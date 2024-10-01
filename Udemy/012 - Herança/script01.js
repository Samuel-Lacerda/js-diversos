// Herança básica

class Animal{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`${this.nome} está fazendo um som.`)
    }
}

class Cachorro extends Animal{
    falar(){
        console.log(`${this.nome} está latindo.`)
    }
}

class Gato extends Animal{
    falar(){
        console.log(`${this.nome} está miando.`)
    }
}

const animal = new Animal('Arara')
const cachorro = new Cachorro('Lucky')
const gato = new Gato('Iris')

animal.falar()
cachorro.falar()
gato.falar()