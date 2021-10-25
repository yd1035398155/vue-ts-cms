import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { YDRequestInterceptors, YDRequestConfig } from './type'
class YDRequest {
  instance: AxiosInstance
  interceptors?: YDRequestInterceptors
  constructor(config: YDRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}
export default YDRequest
