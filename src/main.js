import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setxios from './setaxios'
setxios()

router.beforeEach((to,from ,next)=>{
      store.commit('settoken', localStorage.getItem('token'))
      if(to.meta.requireAuth){
          if(store.state.token){
            next()
          }else{
            next({path:'/login',query:{redirect:to.fullPath}})
          }
      }else{
         next()
      }

})

Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
