function Funcionario(nome,salarioInicial){
    this.nome = nome
    this.salario = salarioInicial

    Object.defineProperty(this,'salario',{
        _salario: 1500,
        get(){
            return this._salario
        },
        
        set(valor){
            if(valor > 1500){
                this._salario = valor
            } else {
                console.log('O salário não pode ser inferior a 1500.')
            }
        }
    })

}

const funcionario01 = new Funcionario('Samuel',8000)
funcionario01.salario = 1400
console.log(funcionario01)