// Criar um Novo Post

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "title": "Meu novo post",
        "body": "Esté é o comentário do meu post!",
        "userId": 12
    })
})
    .then(dados => dados.json())
    .then(dadosConvertidos => console.log(dadosConvertidos))
    .catch(err => console.log(err))

