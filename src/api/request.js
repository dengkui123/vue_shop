// axios配置

import axios from 'axios'
const request = axios.create();

request.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"

request.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('TOKEN');
  return config;
})
export default request