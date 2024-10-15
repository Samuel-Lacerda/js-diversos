// Ler um arquivo e contar as linhas

const fs = require('fs')

fs.readFile('./arquivos/arquivo.txt','utf8',(err,data) => {
    if(err){
        console.log('Erro ao ler o arquivo:',err)
        return
    }

    const linhas = data.split('\n').length

    console.log(`O arquivo possui ${linhas} linhas`)
})