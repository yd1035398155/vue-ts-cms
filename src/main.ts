import { createApp } from 'vue'
import rootApp from './App.vue'
import router from './router'
import store from './store'
import './service/axios_deme'
const app = createApp(rootApp)

app.use(router)
app.use(store)
app.mount('#app')
console.log(process.env.VUE_APP_NAME)
console.log(process.env)
