// Tratando erros com async e await

async function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, nome: 'Pedro' })
            } else {
                reject('ID Inválido')
            }
        }, 1500);
    })

}

async function main() {
    try {
        let usuario = await buscarUsuario(1)
        console.log(`Usuário encontrado: ${usuario.nome}`)
    } catch (erro) {
        console.log('Erro:', erro)
    }
}

main()