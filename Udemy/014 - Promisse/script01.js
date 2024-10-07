// Simulando um tempo de espera

const esperar = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A espera acabou')
    }, 2000);
}).then(mensagem => {
    console.log(mensagem)
})