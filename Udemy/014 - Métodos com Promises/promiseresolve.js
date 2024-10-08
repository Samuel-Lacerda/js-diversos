// Exercício com Promise.resolve()

function retornaComoPromise(valor) {
    return Promise.resolve(valor)
}

retornaComoPromise(5).then((resultado) => console.log(resultado))
