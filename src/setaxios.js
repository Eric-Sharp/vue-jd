import Vue from 'vue'
import axios from 'axios'
import store from './store.js'
import router from  './router.js'
export default function(){
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token=store.state.token
            }
            return config
        }
    )
    axios.interceptors.response.use(
        response=>{ 
            if(response.status=200){
                if(response.data.code==-1){
                    localStorage.removeItem('token')
                    router.replace('/login')
                }
                return response

            }
            return response
        }   

    )

}
