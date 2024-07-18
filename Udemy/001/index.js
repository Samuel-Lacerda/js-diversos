const btn = document.querySelector('.btn')
const saida = document.querySelector('.saida')

const pessoas = []

function enviarFormulario(){
    const form = document.querySelector('.form')

    let contador = 0
    function recebeEventoForm(evento){

        evento.preventDefault()

        const nome = form.querySelector('.nome').value
        const sobrenome = form.querySelector('.sobrenome').value
        const peso = form.querySelector('.peso').value
        const altura = form.querySelector('.altura').value

        pessoas[contador] = {nome, sobrenome, peso, altura}
        
        console.log(pessoas)
        
        saida.innerHTML += `<p>Nome: ${pessoas[contador].nome} </p>
        <p>Sobrenome: ${pessoas[contador].sobrenome} </p>
        <p>Peso: ${pessoas[contador].peso} </p>
        <p>Altura: ${pessoas[contador].altura} </p>`

        contador++
    }

    form.addEventListener('submit', recebeEventoForm)
}

enviarFormulario()