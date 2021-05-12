import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        // console.log( 'Keys: '+keys)

        //Gerar array com os dados nome e senha
        const dados = {nome: this.state.nome, senha: this.state.senha}
        
        //Condição para verificar se o localStorage esta vazio e criar um novo usuário
        if( !localStorage.getItem(id) ){
            alert(`Dados gravos com sucesso!`)           
            //Inserir no localStorage as informções digitadas no formulario.
            localStorage.setItem(id, JSON.stringify(dados))
            
        }else{

            for(var i=0; i < localStorage.length; i++){

                //Pegar um objeto do array
                const getObj = JSON.parse(localStorage.getItem(keys[i]))

                //Peganso o nome digitado no input
                const nomeUser = this.state.nome

                if( (getObj.nome === nomeUser)){
                    console.log('Existe')
                }else{
                    // this.props.history.push('/NaoRegistrado')
                    console.log('Não Existe')
                    getObj.apend(localStorage.setItem(keys.length+1, JSON.stringify(dados)))
                }
            }
        }
        e.preventDefault()
    }

    render(){
        return(
    <div className="pt-5">

        <div className="container border border-aqua rounded shadow alert alert-primary">
            <p className="text-center"><h1>Usuário não Registrado no sistema.</h1></p>
        </div>

        

        <div className="container">
            <div className="pt-5">

            <div className="container border border-aqua rounded shadow alert alert-info">
                <p className="text-center"><h6>Cadastrar novo Usuário e senha!</h6></p>
            </div>

                <form onSubmit={this.handleSubmit} className="border border-blue p-2">
                    <div className="mb-3">
                        <label htmlFor="inputUser" className="form-label">Usuário</label>
                        <input type="text" value={this.state.nome} onChange={this.clickNome} className="form-control" placeholder="Inserir Usuário"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Senha</label>
                        <input type="password" value={this.state.senha} onChange={this.clickSenha} className="form-control" placeholder="Inserir Senha"></input>
                    </div>
                    <div className="text text-center">
                    <Link to="/"> <button type="submit" className="btn btn-primary">Voltar</button> </Link>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        )
    }

}


export default RegisterUser