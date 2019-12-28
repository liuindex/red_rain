import http from '../utils/http.js'

export let home = (data) =>{
    return http({
        url:'',
        method: 'post',
        data: data
    })
}