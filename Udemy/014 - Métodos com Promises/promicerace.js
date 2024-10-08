// Exercício com Promise.race()

const promise1 = new Promise((resolve) => setTimeout(resolve, 3000, 'Mensagem da Promise 1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Mensagem da Promise 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Mensagem da Promise 3'));

Promise.race([promise1, promise2, promise3])
    .then(resolve => {
        console.log(`Resolvi primeiro: ${resolve}`)
    })