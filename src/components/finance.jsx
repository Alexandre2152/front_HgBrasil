import React, { Component } from 'react'
// import axios from 'axios'

import api from '../api/api'


export default class Finance extends Component{

    state={
        finances: []
    }

    async componentDidMount(){

        const response = await api.get('finance')
        this.setState({finances: response.data})

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
                    {this.state.finances.map( finance => 
                        <li>{finance.by}</li>    
                    )}
                </ul>
            </div>

            </>

        )
    }
}
