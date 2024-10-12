// Buscar To-do List (Lista de Tarefas)

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(baseDados => baseDados.json())
    .then(DadosConvertidos => verificaTarefasPendentes(DadosConvertidos))

function verificaTarefasPendentes(dados){
    console.log('Exibindo usuários com tarefas pendentes...')
    dados.forEach(pessoa => {
        if(pessoa.completed === false){
            console.log(`ID: ${pessoa.userId}`)
            console.log(`Tarefa: ${pessoa.title}`)
            console.log('________________________')
        }
    })
}