// Exercício com Promise.all()

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 5));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 10));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, 15));

Promise.all([promise1,promise2,promise3]).then(resolve => {
    let resultado = resolve.reduce((acumulador,valor) => {
        return acumulador += valor
    })
    console.log(resultado)
})