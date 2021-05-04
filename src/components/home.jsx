import React, { Component } from 'react'

class Home extends Component {

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
        //Iniciando o localStorage
        // const id = this.state.id

        //Pegando todas as keys do localStorage
        const keys = Object.keys(localStorage)
        console.log(keys)

        //Pegar um objeto do array
        // const getObj = JSON.parse(localStorage.getItem(this.state.id))

        for( var i=0; i < localStorage.length; i++){
            
            //Pegar um objeto do array
            const getObj = JSON.parse(localStorage.getItem(keys[i]))

            //Peganso o nome e a senha digitados no input
            const nomeUser = this.state.nome
            const senhaUser = this.state.senha

            //Consição para verificar se o nome e a senha correponde ao usuário
            if( (getObj.nome === nomeUser) && (getObj.senha === senhaUser)){
                console.log('Logado')
            }else{
                this.props.history.push('/NaoRegistrado')
            }
        }

        e.preventDefault()
    }

    render(){
        return(
    <div>
        <div className="container">
            <div className="pt-5">
                <form onSubmit={this.handleSubmit} className="border border-blue p-2">
                    <div className="mb-3">
                        <label htmlFor="inputUser" className="form-label">Usuário</label>
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


export default Home