<template>
    <div id='index'>
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                <img :src="item.image">
            </a>
            </cube-slide-item>
        </cube-slide>
        <cube-slide class='slide-list' ref="slideList" :auto-play='false' :data="uls" @change="changePage">
            <cube-slide-item v-for="(list, index) in uls" :key="index" @click.native="clickHandler(list, index)">
               <ul class='roll-list'>
                 <li  v-for='(item,index) in list'  :key="index" >
                   <a :href="item.url">
                     <img :src="item.image" alt="">
                     <p>{{item.label}}</p>
                   </a>
                 </li>
                 </ul> 
                
                <!-- <a :href="item.url">
                <img :src="item.image"> -->
            
            </cube-slide-item>
        </cube-slide>
    </div>
</template>
<script>
export default {
  
  data() {
    return {
      uls:[],
      items: []
    }
  },
  async created(){
    try{ 
      var res= await this.$axios.get('/api/slide')
      this.items=res.data
      var ulsres =await this.$axios.get('/api/rollinglist')
      this.uls = ulsres.data
      }catch(e){console.log(e)}

  }
  ,
  methods: {
    changePage(current) {
     
    },
    clickHandler(item, index) {
      
    }
  }
}
</script>
<style lang="less" scoped>
    #index{
      .slide-list{
        margin-top:0.5rem;
      }
      .cube-slide{
        a img{width:100%}

      }
      ul.roll-list {
        display:flex;
        flex-wrap: wrap;
        li{width:2.2rem;
          margin:0.2rem 0.12rem; 
          p{font-size:0.5rem;
            margin-top:0.2rem;
          }  
            
            
          a{display: block;
            width: 100%;
             img{
               display:block;
               width:100%;
               height:2.2rem;
               border-radius: 50%
               }
          }
          }
         
      }
    }
</style>