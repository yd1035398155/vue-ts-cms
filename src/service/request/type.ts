import { AxiosResponse, AxiosRequestConfig } from 'axios'
interface YDRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}
interface YDRequestConfig extends AxiosRequestConfig {
  interceptors?: YDRequestInterceptors
}
export { YDRequestInterceptors, YDRequestConfig }
