// axios配置

import axios from 'axios'
const request = axios.create();

request.defaults.baseURL = "http://47.94.151.33:8889/api/private/v1/"

request.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('TOKEN');
  return config;
})
export default request