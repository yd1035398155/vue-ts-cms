import { AxiosRequestConfig } from 'axios'
interface YDRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (err: any) => any
}
interface YDRequestConfig extends AxiosRequestConfig {
  interceptors?: YDRequestInterceptors
  showLoading?: boolean
}
export { YDRequestInterceptors, YDRequestConfig }
