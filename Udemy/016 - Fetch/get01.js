// Buscar Comentários de um Post

fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(callback => callback.json())
    .then(post => exibeComentarios(post))

function exibeComentarios(post) {
    post.forEach(element => {
        console.log(`Autor: ${element.name}`)
        console.log(`Comentário: ${element.body}`)
        console.log('______________________________________')
    });
}