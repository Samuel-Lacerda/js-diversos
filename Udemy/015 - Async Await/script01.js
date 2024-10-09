// Usando await para esperar por uma Promise

async function carregarDados(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dados carregados')
        }, 1000);
    })

    let resultado = await promise
    console.log(resultado)
}

carregarDados()