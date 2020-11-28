import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '35153c7f-054b-4603-92bc-8d75074dd8ee'
    }
})

export default instance