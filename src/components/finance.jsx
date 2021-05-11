import React, { useEffect, useState } from 'react';
// import axios from 'axios'

// import api from '../api/api'


export default function Finance (){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        
        //Passando o headers com cookies de requisição
        const myHeaders = new Headers()
        myHeaders.append(
            'Cookie', '__cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
            )
        //Passando parametros do cabeçalho    
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        //Iniciando a chamada da url
        fetch('https://api.hgbrasil.com/finance?format=json-cors&key=f39f9063', requestOptions)
        .then((res) => res.json())
        .then((data) => { 
                setData(data)
                console.log(data)
        })
        .catch((err) => {
                setError(err)
            })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading){
        return <p>Carregando Dados...</p>
    }

    const listar = Object.entries(data)

    if(error || !Array.isArray(listar)){
        console.log(listar)
        return <p>Ocorreu um erro ao carregar seus dados!</p>
        
    }

    console.log(listar)
            return(
                
                <div>
                    <ul>
                        {listar.map( (item) => (
                        
                           <li key={item}>
                               {JSON.stringify(item[1].currencies)  }
                            </li>    
                         
                        ))} 
                   </ul>
                </div>
    
    
            )

        

    
}
