import axios from 'axios'
import { AxiosInstance } from 'axios'
import { YDRequestInterceptors, YDRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/packages/components/loading/src/loading.type'
const DEFAULT_LOADING = true
class YDRequest {
  instance: AxiosInstance
  interceptors?: YDRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: YDRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    //从config中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器:请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求...',
            background: 'rgba(0,0,0,.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器:请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器:响应拦截成功')
        //讲loading移除
        this.loading?.close()

        return res.data
      },
      (err) => {
        console.log('所有的实例都有的拦截器:响应拦截失败')
        //讲loading移除
        this.loading?.close()

        return err
      }
    )
  }
  // 单独请求的拦截器
  request<T>(config: YDRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 判读是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 将showLoading设置为true,就不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          // 将结果返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置为true,就不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: YDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: YDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: YDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: YDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default YDRequest
