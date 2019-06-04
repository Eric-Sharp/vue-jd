<template>
    <div>
    <div class='cart' v-for="(item , index ) in cartArray" :key='index'  >
        <div >{{item.title}}</div>
        <div >
            <i class="cubeic-remove" @click='decrease(item)'> </i>
                {{item.count}}
            <i class="cubeic-add" @click='increase(item)'> </i>

        </div>
        
           
    </div>
        <cube-button @click='submit'>提交订单 </cube-button>
        <cube-button @click='clearCart'>清空购物车 </cube-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import store from '../store.js'
export default {
    data(){
        return {
           


        }
    },
    methods:{
        decrease(item){
            this.$store.commit('reduceCartArray',item)
        },
        increase(item){
            var data={count:1,id:item.id,title:item.title}
            this.$store.commit('addCartArray',data)
          
            

        },
        submit(){},
        clearCart(){
            this.$store.commit('clearCart')
        }
    }
    ,
    computed:{
        ...mapState({
            cartArray:state=>state.cartArray

        })

    }

}
</script>
<style lang="less" scoped>
    .cart{
        display: flex;
        justify-content: space-between;
        padding:5px 15px;

    }
</style>
