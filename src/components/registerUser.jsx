import React, { Component } from 'react'

class RegisterUser extends Component {

    constructor(props){
        super(props)

        this.state={
            id: 0,
            nome: '',
            senha: ''
        }

        this.clickNome = this.clickNome.bind(this)
        this.clickSenha = this.clickSenha.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    clickNome(e){
        this.setState({ nome: e.target.value })
    }

    clickSenha(e){
        this.setState({ senha: e.target.value })
    }

    handleSubmit(e){
        //pegando o id do state
        const id = this.state.id

        //Pegando todas as keys do localStorage
        const keys = Object.keys(localStorage)
        console.log( 'Keys: '+keys)

        //Pegar um objeto do array
        const getObj = JSON.parse(localStorage.getItem(this.state.id))
        
        if( !localStorage.getItem(id) ){
            alert(`Dados gravos com sucesso: ${this.state.nome} - ${this.state.senha}`)           
            
            const dados = {nome: this.state.nome, senha: this.state.senha}
            localStorage.setItem(id, JSON.stringify(dados))
            
            
        }else if( getObj.nome === this.state.nome ){
            alert('passou')
        }

        //Pegar um objeto do array
        // const getObjt = localStorage.getItem(this.state.id)
        //     const getObj = JSON.parse(getObjt)
        //     console.log("pegar: " + getObj.nome)





        // htmlfor( var i=0; i < localStorage.length; i++){
        //     const obj = localStorage.getItem(localStorage.key(i))
        //     console.log('laço for ' + keys[i] + " / " +obj)

            
        //     if(keys[i] === id){
        //         const id = this.state.id
        //         alert('diferente id')

        //         console.log("id: " + id)
        //     }

            
        // }
        
        // const nome = localStorage.getItem('alexandre');
        // const senha = localStorage.getItem('alexandre');
        // console.log(nome)
        // console.log(senha)

        // if(nome === this.state.nome || senha === this.state.senha){
        //     alert("logado")
        // }
        e.preventDefault()
    }

    render(){
        return(
    <div>
        <div className="container">
            <div className="pt-5">
                <form onSubmit={this.handleSubmit} className="border border-blue p-2">
                    <div className="mb-3">
                        <label htmlFor="inputUser" className="form-label">Login</label>
                        <input type="text" value={this.state.nome} onChange={this.clickNome} className="form-control" placeholder="Inserir Usuário"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Senha</label>
                        <input type="password" value={this.state.senha} onChange={this.clickSenha} className="form-control" placeholder="Inserir Senha"></input>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
        )
    }

}


export default RegisterUser