// Exercício com Promise.allSettled()

const promise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Sucesso 1'));
const promise2 = new Promise((_, reject) => setTimeout(reject, 3000, 'Erro na Promise 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Sucesso 3'));


Promise.allSettled([promise1, promise2, promise3])
    .then(resultado => {
        console.log(resultado)
    })