import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import ToggleButton from 'react-bootstrap/ToggleButton'

export default function Finance (){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const sell = null

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
        fetch('https://api.hgbrasil.com/finance?format=json-cors&key=ac7f859a', requestOptions)
        .then((res) => res.json())
        .then((data) => { 
                setData(data)
                // console.log(data)
        })
        .catch((err) => {
                setError(err)
            })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    //Condição para verificar se os dados estão sendo carregados
    if(loading){
        return <p>Carregando Dados...</p>
    }

    //Converter o valor recebiso em um array
    const listar = Object.values(data)

    //Verificar se o valor a ser cosumido não esta vazio.
    if(error || !Array.isArray(listar)){
        return <p>Ocorreu um erro ao carregar seus dados!</p>
        
    }
console.log(listar)
            //Copo com conteúdo a ser exibido.
            return(
                
                <div className="container">

                {/* Lista todos os dados da api */}
                   <div>
                       <p className="text-uppercase alert alert-success ">
                           <strong>moeda base de cotação: </strong>
                            {listar.map( (item) => {
                                // console.log(item.currencies)
                                return JSON.stringify(item.currencies && item.currencies.source) 
                            })} 
                        </p>
                   </div>

                   {/* Acordeon para exibir os campos da api*/}
                   <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <strong className='text text-uppercase'>cotação das moedas</strong>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {/* CORPO DA REQUISIÇÃO DE COTAÇÃO DE MOEDAS */}
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                        <th>MOEDA</th>
                                        <th>COMPRA</th>
                                        <th>VENDA</th>
                                        <th>VARIAÇÃO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {/* ITEM 01 */}
                                        <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.ARS.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.ARS.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.ARS.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.ARS.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 02 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.BTC.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.BTC.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.BTC.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.BTC.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 03 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.AUD.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.AUD.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.AUD.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.AUD.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 04 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.CAD.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.CAD.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.CAD.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.CAD.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 05 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.CNY.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.CNY.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.CNY.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.CNY.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 06 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.EUR.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.EUR.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.EUR.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.EUR.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 07 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.GBP.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.GBP.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.GBP.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.GBP.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 08 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.JPY.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.JPY.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.JPY.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.JPY.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 09 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.USD.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.USD.buy)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.currencies && item.currencies.USD.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.currencies && item.currencies.USD.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>
                                     
                                        
                                    </tbody>
                                </Table>

                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <strong className='text text-uppercase'>posições dos principais mercados</strong>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            {/* CORPO DA REQUISIÇÃO DE COTAÇÃO DE MOEDAS */}
                            <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                        <th>NOME</th>
                                        <th>LOCAL</th>
                                        <th>PONTOS</th>
                                        <th>VARIAÇÃO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {/* ITEM 01 */}
                                        <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.CAC.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.CAC.location)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.CAC.points) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.stocks && item.stocks.CAC.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 02 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.IBOVESPA.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.IBOVESPA.location)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.IBOVESPA.points) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.stocks && item.stocks.IBOVESPA.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 03 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.NASDAQ.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.NASDAQ.location)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.NASDAQ.points) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.stocks && item.stocks.NASDAQ.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 04 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.NIKKEI.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.NIKKEI.location)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.stocks && item.stocks.NIKKEI.points) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.stocks && item.stocks.NIKKEI.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>                                   
                                        
                                    </tbody>
                                </Table>

                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2" className="text">
                            <strong className='text text-uppercase'>cotação nas principais corretoras</strong> 
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            {/* CORPO DA REQUISIÇÃO DE COTAÇÃO DE MOEDAS */}
                            <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                        <th>NOME</th>
                                        <th>MOEDA DE CABIO</th>
                                        <th>ÚLTIMA POIÇÃO</th>
                                        <th>COMPRA</th>
                                        <th>VENDA</th>
                                        <th>VARIAÇÃO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {/* ITEM 01 */}
                                        <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.bitstamp.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.bitstamp.format)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.bitstamp.buy) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.bitstamp.last) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.bitstamp.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.bitcoin && item.bitcoin.bitstamp.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 02 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.blockchain_info.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.blockchain_info.format)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.blockchain_info.buy) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.blockchain_info.last) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.blockchain_info.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.bitcoin && item.bitcoin.blockchain_info.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    {/* ITEM 03 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.coinbase.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.coinbase.format)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.coinbase.buy) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.coinbase.last) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.coinbase.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.bitcoin && item.bitcoin.coinbase.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>

                                    
                                    {/* ITEM 04 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.foxbit.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.foxbit.format)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.foxbit.buy) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.foxbit.last) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.foxbit.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.bitcoin && item.bitcoin.foxbit.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>  

                                    {/* ITEM 05 */}
                                    <tr >
                                            <>
                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.mercadobitcoin.name)
                                                )} 
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.mercadobitcoin.format)
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.mercadobitcoin.buy) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.mercadobitcoin.last) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => 
                                                    JSON.stringify(item.bitcoin && item.bitcoin.mercadobitcoin.sell) 
                                                )}
                                            </td>

                                            <td >
                                                {listar.map( (item) => {
                                                    const variacao = JSON.stringify(item.bitcoin && item.bitcoin.mercadobitcoin.variation)
                                                    if(variacao < 0){
                                                        return(
                                                            <strong className="text text-danger">{variacao}</strong>
                                                            )
                                                    }else{
                                                        return(
                                                            <strong className="text text-primary">{variacao}</strong>
                                                            )
                                                    }
                                                    })}
                                            </td>
                                            </>
                                    </tr>                                   
                                        
                                    </tbody>
                                </Table>

                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <div className="pt-3">
                    <Link to="/"> <Button type="submit" variant="primary" size="lg" block>Voltar</Button> </Link>
                    </div>

                </div>
            )    
}
