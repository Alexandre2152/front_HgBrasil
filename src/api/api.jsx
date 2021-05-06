import axios from 'axios'

export default axios.create({

    url: 'https://api.hgbrasil.com',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer __cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
        'X-Requested-With': 'XMLHttpRequest',
      }
    // url: 'http://api.hgbrasil.com/finance',
    // headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //     'Access-Control-Allow-Origin': true,
    //     'Access-Control-Allow-Credentials':true,
    //     'X-Requested-With': 'XMLHttpRequest'
    // },
    // redirect: 'follow',
    // mode: 'cors',
    // crossorigin: true
})