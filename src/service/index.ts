import YDRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const ydrequest = new YDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default ydrequest
