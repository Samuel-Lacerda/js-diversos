// Usando async para somar dois números de forma assíncrona

async function soma(a, b) {
    let calculo = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 1000);
    })

    let resultado = await calculo
    console.log(resultado)
    
}

soma(2,7)