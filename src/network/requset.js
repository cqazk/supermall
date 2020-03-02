import axios from 'axios'
export default function request(config){
    return new Promise((resolve,reject)=>{
        const instence=axios.create({
            baseURL: 'http://123.207.32.32:8000/api/wh',
            //baseURL: 'http://106.54.54.237:8000/api/wh',
            timeout: 5000
        })
        //请求拦截
        instence.interceptors.request.use(config=>{
            return config
        },err=>{
        })

        //响应拦截
        instence.interceptors.response.use(res=>{
            return res.data
        },err=>{
            console.log(err)
        })

        instence(config)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

