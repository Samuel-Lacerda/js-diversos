// Exercício com Promise.reject()

function retornaErro() {
    return Promise.reject('Erro personalizado')
}

retornaErro().catch((erro) => console.log(erro));
