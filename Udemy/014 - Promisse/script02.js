// Simulando uma API de usuários

function buscaUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {nome:'Ana',idade:25},
                {nome:'Pedro',idade:32}
            ]
    
        )
        },1000)
    })
}

buscaUsuarios().then(usuarios => {
    console.log(usuarios)
})