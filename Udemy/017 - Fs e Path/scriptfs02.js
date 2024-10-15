// Escrever em um arquivo

const fs = require('fs')

let msg = `Esse vai ser o novo conteúdo do arquivo!
Aproveitei pra testar a quebra de linha com o Enter. hehehe`

fs.writeFile('./arquivos/arquivo - Copia.txt', msg, (err,data) => {
    if(err){
        console.log(err)
        return
    }
    console.log('Conteúdo gravado com sucesso!')
})