import React, { Component } from 'react'
// import axios from 'axios'

// import api from '../api/api'


export default class Finance extends Component{
    constructor(props){
        super(props)

        this.state = {
            finances: [],
            isLoaded: false,
            error: null
        }
    }

    // state={
    //     finances: [],
    //     isLoaded: true,
    //     error: null
    // }

    userFetch(){
        const myHeaders = new Headers()
        myHeaders.append(
            'Cookie', '__cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
            )

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.hgbrasil.com/finance?format=json-cors&key=f39f9063`, requestOptions)
        .then(res => res.json())
        
        .then(result => { 
                this.setState({
                    finances: result,
                    isLoaded: true
                })
                console.log(result)
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    userAxios(){

        // const url = 'https://api.hgbrasil.com/finance?format=json-cors&key=f39f9063'
        // const headers = {
        //     method: 'get',
        //     headers: {
        //         'Content-Type': 'application/json; charset=utf-8',
        //         'X-Requested-With': 'XMLHttpRequest',
        //         'Cookie': '__cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
        //     },
        //     redirect: 'follow',
        //     mode: 'cors'
        // }

        // axios.get(url, headers)
        // .then(res => {
        //     const finances = res.data
        //     this.setState({ finances })
        // })
    }

    

    componentDidMount(){
        this.userFetch()
    //    this.userAxios()
    }

    render(){
        
        const { error, isLoaded} = this.state
        const  { finances=[]} = this.props

        console.log(error)
        console.log(isLoaded)
        console.log(finances)

        if( error ){
            return <div>Error: { error.message }</div>
        }else if (!isLoaded){
            return <div>Loading...</div>
        }else {

            return(
                <>
                <div>
                    
                        {finances.map( lista => (
                        <ul>
                           <li key={lista.valid_key}>
                               {lista.results.currencies }
                            </li>    
                         </ul>
                        ))}
                            <li>Teste</li>
                   
                </div>
    
                </>
    
            )

        }

    }
}
