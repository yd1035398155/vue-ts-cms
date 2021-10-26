import { createApp } from 'vue'
import rootApp from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import ydrequest from './service'
const app = createApp(rootApp)

app.use(router)
app.use(store)
app.mount('#app')
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
ydrequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独响应的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的response')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
