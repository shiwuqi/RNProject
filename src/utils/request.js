import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 5000 // request timeout
})

// request拦截
service.interceptors.request.use(config => {
  // 对于post提交，后台只能接收form表单的参数
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.transformRequest = [data => {
      // 对 data 进行任意转换处理
      let ret = ''
      for (var it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非200是抛错 可结合自己业务进行修改
  */
    const res = response.data
    if (response.status === 200) {
      return res
    } else {
      console.log('错误')
    }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service