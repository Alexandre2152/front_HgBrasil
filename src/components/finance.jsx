import React, { Component } from 'react'
// import axios from 'axios'

// import api from '../api/api'


export default class Finance extends Component{

    state={
        finances: [],
        isLoaded: false,
        error: null
    }

    async componentDidMount(){

        // const response = await api.get('finance')
        // this.setState({finances: response.data})

        const myHeaders = new Headers()
        myHeaders.append(
            'Cookie', '__cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
            )

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            // mode: 'cors',
            // 'strict-origin-when-cross-origin': true,
            // 'Access-Control-Allow-Headers': 'Content-Type, x-requested-with',
            // "referrerPolicy": "origin-when-cross-origin"
        };

        // const headers ={ 
        // method: 'GET',
        //     headers: {
        //     'Content-Type': 'application/json; charset=utf-8',
        //     'Authorization': 'Bearer __cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
        //     'X-Requested-With': 'XMLHttpRequest',
        //     }
        // }

        fetch('https://api.hgbrasil.com/finance?format=json-cors&key=f39f9063', requestOptions)
        .then(res => res.txt())
        .then((result) => {
                this.setState({
                    isLoaded: true,
                    finances: result.finances
                })
                console.log(result);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )

        // const url = 'https://api.hgbrasil.com/finance'
        // const headers = {
        //     method: 'get',
        //     url: 'https://api.hgbrasil.com/finance',
        //     headers: {
        //         'Content-Type': 'application/json; charset=utf-8',
        //         'Access-Control-Allow-Origin': '*',
        //         'X-Requested-With': 'XMLHttpRequest'
        //     },
        //     redirect: 'follow',
        //     mode: 'cors'
        // }

        // axios.get(url, headers)
        // .then(res => {
        //     const finances = res.data
        //     this.setState({ finances })
        //     console.log(finances)
        // })
    }

    render(){
        
        return(
            <>
            <div>
                <ul>
                    {this.state.finances.map( obj => (
                        <li>{obj.results.currencies }</li>    
                    ))}
                        <li>Teste</li>
                </ul>
            </div>

            </>

        )
    }
}
