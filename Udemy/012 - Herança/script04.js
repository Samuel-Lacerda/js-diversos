// Chamar métodos da superclasse

class Funcionario{
    constructor(nome,salario){
        this.nome = nome
        this.salario = salario
    }

    exibirSalario(){
        console.log(`Salário: ${this.salario}`)
    }
}

class Gerente extends Funcionario{
    constructor(nome,salario,bonus){
        super(nome,salario)
        this.bonus = bonus
    }

    exibirSalario(){
        const salarioTotal = this.salario + this.bonus
        console.log(`Salário + bônus: ${salarioTotal}`)
    }

    calcularBonus(){ 
        this.bonus = this.salario * 0.1
    }
}

const funcionario = new Funcionario('Pedro',2500)
console.log(funcionario)
funcionario.exibirSalario()

const gerente = new Gerente('Samuel',11500,2000)
console.log(gerente)
gerente.exibirSalario()
gerente.calcularBonus()
console.log(gerente)
gerente.exibirSalario()