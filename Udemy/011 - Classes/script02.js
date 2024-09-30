// Classe Retangulo

class Retangulo{
    constructor(largura,altura){
        this.largura = largura
        this.altura = altura
    }

    get area(){
        return this.largura * this.altura
    }

    set lados(valores){
        const [largura, altura] = valores
        this.largura = largura
        this.altura = altura
    }
}

const retangulo = new Retangulo(14,5)
console.log(retangulo.area)

retangulo.lados = [5,4]
console.log(retangulo)
console.log(retangulo.area)