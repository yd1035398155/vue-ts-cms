import { createApp } from 'vue'
import rootApp from './App.vue'
import router from './router'
import store from './store'
// import './service/axios_deme'
import ydrequest from './service'
const app = createApp(rootApp)

app.use(router)
app.use(store)
app.mount('#app')
ydrequest.request({
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
