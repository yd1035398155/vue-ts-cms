import { AxiosRequestConfig, AxiosResponse } from 'axios'
interface YDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}
interface YDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YDRequestInterceptors<T>
  showLoading?: boolean
}
export { YDRequestInterceptors, YDRequestConfig }
