// Buscar Informações de um Álbum

fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(dados => dados.json())
    .then(dadosConvertidos => exibeDados(dadosConvertidos))


function exibeDados(dados){
    dados.forEach(dados => {
        console.log(`Titulo: ${dados.title}`)
        console.log(`URL ${dados.url}:`)
        console.log(`URL-IMG: ${dados.humbnailUrl}`)
        console.log('__________________________')
    })
}