// Cadastrar Novo Usuário

fetch('https://jsonplaceholder.typicode.com/users', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        "name": "Samuel Lacerda",
        "username": "samuel_lacerda",
        "email": "samuel@exemplo.com"
    })
})
    .then(dados => dados.json())
    .then(dadosConvertidos => console.log(dadosConvertidos))