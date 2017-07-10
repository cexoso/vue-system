  import axios from 'axios'

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5962eeb29adc231f357c6bd5/sys/'

  export function fetch (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  export default {
    leftMenu () {
      return fetch('/leftMenu')
    }
  }
