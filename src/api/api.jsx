import axios from 'axios'

const api = axios.create({

    url: 'https://api.hgbrasil.com/',
    method: 'GET',
    headers: {
      'Cookie': '__cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
        // 'Content-Type': 'application/json; charset=utf-8',
        // 'Authorization': 'Bearer __cfduid=d2b6dfdef5fde0ccaebe63f095281b5581619807805',
        // 'X-Requested-With': 'XMLHttpRequest',
      }
})

export default api