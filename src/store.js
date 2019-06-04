import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    cartArray:[{title:'华为',count:2,id:1},{title:'小米',count:1,id:2}]
  },
  mutations: {
      settoken(state,token){
          state.token=token
      },
      addCartArray(state,data){
          var flag=false
          state.cartArray.some((item,i)=>{
            
            if(item.title==data.title){
              item.count+=data.count
              flag=true
              return true
            }
          })
          if(!flag){
            state.cartArray.push(data)
          }
      },
      reduceCartArray(state,data){
          state.cartArray.some((item,i)=>{
            if(item.title==data.title){
              if(item.count>1){item.count-=1}
              else if(item.count==1){
                if(window.confirm('确认删除商品吗？')){
                  var index= state.cartArray.indexOf(item)
                  state.cartArray.splice(index,1)
                }
              }
              return true
            }

          })
      },
      clearCart(state){
        state.cartArray=[]

      }
  },
  actions: {

  },
  getters:{
    sumCount(state){
      var num=0
      state.cartArray.forEach(item=>{
        num+=item.count
      })
      return num
    }
  }
})
