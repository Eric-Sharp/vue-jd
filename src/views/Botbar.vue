<template>
<div class='root'>
    <transition :name='transitonClass' >
      <router-view class='router'></router-view>  
    </transition>


  <cube-tab-bar :class='tabBarClass'
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler">
  </cube-tab-bar>
  <span class='bage'>{{$store.getters.sumCount}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
        transitonClass:'slide',
        tabBarClass:'tabBar',
      selectedLabelDefault: '主页',
      tabs: [{
        label: '主页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      },
      {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
            case '主页' :
                this.$router.push('/botbar/home');
            break;
            case '分类':
                this.$router.push('/botbar/tag');
                break;
            case '搜索':
                this.$router.push('/botbar/search')
                break;
             case '购物车':
                this.$router.push('/botbar/cart')
                break;
             case '我的':
                this.$router.push('/botbar/me')
                break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .bage{
      position :fixed;
      height: 18px;
      min-width:18px;
      border-radius: 9px;
      background-color: red;
      bottom :35px;
      left: 70%;
      z-index: 10001;
      color:#fff;
      font-size:14px;
      line-height:18px;
    }
    .root{padding-bottom:51px}
    .cube-tab-bar.tabBar{
        position:fixed;
        width:100%;
        left:0px;
        bottom: 0px;
        font-size:18px;
        z-index:10000;
        background-color: #fff;
    }

    // 此处动画效果有bug
    // .slide-enter{
    //     opacity: 0;
    //     transform:translateX(100%) !important
    // }
   

    
    // .slide-leave-active{
    //      opacity: 0;
    //     transform:translateX(-100%) !important
    // }
    // .router{
    //     position:absolute  ;
    //     width:100%;
    //     transition:all 0.8s ease;
    // }
</style>