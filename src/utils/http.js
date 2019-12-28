import axios from 'axios'
axios.defaults.withCredentials = true

const http = axios.create({
    baseURL: '/',
    timeout: 3000
})

//请求拦截
http.interceptors.request.use(config => {
    //token
    let token = sessionStorage.getItem('token');
    if(token){
        config.headers['Authorization'] = token
    }
    //Contant-type
    let map = {
        'file':'multipart/form-data',
        'json':'application/json;charset=utf-8',
       // 'form':'application/x-www-form-urlencoded;charset=utf-8' 不建议使用
    }
    let type = map[config.type] || map['json']
    config.headers['Content-Type'] = type;

    return config

}, error => {
    console.log('axios-->request', error)
    return Promise.reject(error)
})

//响应拦截
http.interceptors.response.use(response => {
    const data = response.data
    return Promise.resolve(data)
}, error => {
    console.log('axios-->response', error)
    return Promise.reject(error)
})

export default http