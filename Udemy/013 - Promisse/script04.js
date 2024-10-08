// Corrente de Promises

function autenticarUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Usuário autenticado')
        },1000)
    })
}

function carregaDadosDoUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dados do usuário carregados')
        },2000)
    })
}

autenticarUsuario().then(resolve => {
    console.log(resolve)
    return carregaDadosDoUsuario()
}).then(resolve => {
    console.log(resolve)
})