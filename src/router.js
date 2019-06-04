import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './components/Register'
import { IndexList } from 'cube-ui';
// import Index from './views/Index.vue'
import Botbar from './views/Botbar.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/botbar'
    },
    
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Login.vue')
    },{
      path:'/botbar',
      name:'botbar',
      component:Botbar,
      children:[
        {path:'home',
        
          component:()=>import('./views/Index.vue'),
          name:'home'
        },
        {path:'search',
          component:()=>import('./views/Search.vue'),
          name:'search'
        },
        {path:'me',
          component:()=>import('./views/Me.vue'),
          name:'me',
          meta:{
            requireAuth:true
          }
        },
        {path:'tag',
          component:()=>import('./views/Tag.vue'),
          name:'tag'
        },
        {path:'cart',
          component:()=>import('./views/Cart.vue'),
          name:'cart',
          meta:{
            requireAuth:true
          }
        },
      ]
    }
  ]
})
