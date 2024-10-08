// Exercício com Promise.any()

const promise1 = new Promise((_, reject) => setTimeout(reject, 3000, 'Falha 1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, 'Sucesso 2'));
const promise3 = new Promise((_, reject) => setTimeout(reject, 1000, 'Falha 3'));

Promise.any([promise1, promise2, promise3])
    .then(resultado => {
        console.log(`Resolvi primeiro: ${resultado}`)
    })
    .catch(erro => {
        console.log(`Deu tudo errado! ${resultado}`)
    })