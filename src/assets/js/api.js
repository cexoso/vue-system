  import axios from 'axios'

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  axios.defaults.baseURL = 'http://sys.silaishi.com/login'
  axios.defaults.timeout = 5000

  export default {
    get (url, params) {
      return axios({
        method: 'get',
        url,
        params,
        responseType: 'json'
      }).catch(function (err) {
        console.log(err)
      })
    },
    post (url, data) {
      return axios({
        method: 'post',
        url,
        data,
        responseType: 'json'
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
