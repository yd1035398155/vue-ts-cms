// 生产环境和开发环境
// 1.手动区分
// 2.根据process.env.NODE_ENV来区分
// 3.创建.env.development,.env.production,.env.test设置环境变量,但必须以VUE_APP_**开头
// 然后通过process.env.VUE_APP_** 来使用
let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
}
export { BASE_URL, TIME_OUT }
