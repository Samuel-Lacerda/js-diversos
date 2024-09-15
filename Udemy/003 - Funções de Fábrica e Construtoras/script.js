function criaPessoa(titulo, autor, ano){
    return{
        titulo: titulo,
        autor: autor,
        ano: ano,
        ler(){console.log(`Eu sou uma função de fábrica e estou lendo o ${this.titulo} de ${this.autor}, o livro foi publicado em ${this.ano}`)}
    }
}

let p1 = criaPessoa('Jogos Vorazes','Collins','2010')
p1.ler()

function criaCarro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.acelerar = function(){
        console.log(`O carro da marca ${this.marca}, modelo ${this.modelo}, fabricado em ${this.ano} vai acelerar.`)
        console.log('Vrummmm... Vrummmmm...')
    }
}

let carro1 = new criaCarro('Fiat','Uno','1999')
console.log(carro1.acelerar())