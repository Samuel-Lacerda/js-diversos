// Herança e métodos sobrescritos

class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    saudar(){
        console.log(`${this.nome} está lhe saudando!`)
    }
}

class Aluno extends Pessoa{
    constructor(nome,matricula){
        super(nome)
        this.matricula = matricula
    }

    saudar(){
        console.log(`${this.nome} está lhe saudando e falando seu número de matricula: ${this.matricula}`)
    }
}

class Professor extends Pessoa{
    constructor(nome,materia){
        super(nome)
        this.materia = materia
    }

    saudar(){
        console.log(`${this.nome} lhe sauda, ele(a) leciona ${this.materia}`)
    }
}

const aluno = new Aluno('Samuel',12345)
const professor = new Professor('Eduardo','Arquitetura de Software')
aluno.saudar()
professor.saudar()