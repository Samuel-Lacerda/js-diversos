// Enviar Comentário em um Post

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        " postId": 1,
        "name": "Samuel Lacerda",
        "email": "samuel@exemplo.com",
        "body": "Esse post é muito interessante!"
    })
})
    .then(dados => dados.json())
    .then(dadosConvertidos => console.log(dadosConvertidos))