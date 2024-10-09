// Consulta de API Simulada

async function consultarAPI(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(id > 0){
                resolve({nome:'Maria', idade:26})
            } else {
                reject('Usuário não encontrado na base de dados.')
            }
        }, 2000);
    })
}

async function buscarDadosUsuario(){
    try{
        let usuario = await consultarAPI(2)
        console.log(`Usuário: ${usuario.nome}. Idade: ${usuario.idade}`)
    } catch (erro) {
        console.log(erro)
    }
}

buscarDadosUsuario()