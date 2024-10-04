class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')

        this.evento()
    }

    evento(){
        this.formulario.addEventListener('submit',e =>{
            this.prevenirEnvio(e)
        })
    }

    prevenirEnvio(e){
        e.preventDefault()
        let enviaCampos = this.verificaCampos()
    }

    verificaCampos(){
        let valido = true

        for(let campo in this.formulario.querySelectorAll('.validar')){
            if(!campo.value){
                this.criaErro(campo,'teste')
                valido = false
            }
        }
    }

    criaErro(campo,msg){
        let div = document.createElement('div')
        div.innerText = msg
        campo.insertAdjacentElement('afterend', div)
    }
}

const validadeDoFormulario = new ValidaFormulario()