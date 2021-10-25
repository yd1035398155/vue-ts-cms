import axios from 'axios'
//1
// axios.get()
//
// axios.request({
//   method: 'GET'
// })
// 模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })
// // 2模拟get请求,并传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'yd',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// // 3模拟post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'yd',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// httpbin.org 支持post请求
//promise本身可以有类型
// new Promise<string>((res) => {
//   res('asb')
// }).then((res) => {
//   console.log(res)
// })
// 配置Axios,全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios
//   .get('/get', {
//     params: {
//       name: 'yd',
//       age: 18
//     }
//     // 4每个请求单独配置
//     // timeout: 5000
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// axios
//   .post('/post', {
//     data: {
//       name: 'yd',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// 5.多个请求一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'abcdefg', age: 555 } }),
    axios.post('/post', {
      data: {
        name: 'yd',
        age: 18
      }
    })
  ])
  .then((res) => {
    console.log(res)
  })
// 6. axios拦截器
// request拦截器:每次请求前加入token信息
axios.interceptors.request.use(
  (config) => {
    //做一些操作,然后返回
    //如添加token
    return config
  },
  (err) => {
    return err
  }
)
// response拦截器:真正的数据在response.data中,可以拦截response并返回data
axios.interceptors.response.use(
  (res) => {
    console.log('响应拦截成功')
    return res.data
  },
  (err) => {
    console.log('服务器相应失败')
    return err
  }
)
