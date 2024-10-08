// Simulando uma operação que pode falhar

function lerArquivo(nomeArquivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nomeArquivo === 'dados.txt') {
                resolve('Contéudo do arquivo:....')
            } else {
                reject('Arquivo não encontrado')
            }
        }, 1500);
    })
}

lerArquivo('dados.txt').then(conteudo => {
    console.log(conteudo)
}).catch(conteudo => {
    console.log(conteudo)
})