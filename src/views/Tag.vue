<template>
    <div class='tegBox'>
        <cube-scroll class='leftScroll'>
            <ul>
                <li v-for='(item,index) in labels' @click="handle(index,item.id)"   :key='index' :class="item.active?'active':''">
                    {{item.label}}
                </li>
            </ul>

        </cube-scroll>

        <cube-scroll class='rightScroll'>
                <ul>
                    <li v-for='(item ,i) in tags' :key="i"  >
                        <img :src="item.image" alt="">
                        <p>{{item.label}}<i class="cubeic-add" @click='increase($event,item)'></i></p>
                    </li>

                </ul>
        </cube-scroll>
        <transition @before-enter='beforeEnter' @enter='enter' @afterEnter='afterEnter'>
            <div ref= 'ball' class="ball" v-show='show'>
                <div class='inner' ref='inner'>
                <i class="cubeic-add"></i>
                </div>
            </div>
        
        </transition>

    </div>
</template>
<script>
export default {
    data(){
        return{
            addButton:'',
            show:false,
            // 右侧数据mock获取
            tags:[],
            // 左侧数据
            labels:[
                {label:'全部',active:true,id:0},
                {label:'huawei',active:false,id:1},
                {label:'小米',active:false,id:2},
                {label:'荣耀',active:false,id:3},
                {label:'雪梨',active:false,id:4},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2},
                {label:'小米',active:false,id:2}

                ]



        }
    },
    created(){this.getTags(0)},
    mounted(){
        var leftScroll=document.querySelector('.leftScroll')
        var rightScroll=document.querySelector('.rightScroll')
        var clientHeight=document.documentElement.clientHeight
        // 打印
            console.log(clientHeight,rightScroll,leftScroll.style.height)
        leftScroll.style.height=clientHeight-51 +'px'
        rightScroll.style.height=clientHeight-51 +'px'


    },
    methods:{
        beforeEnter(){
            const location = this.addButton.getBoundingClientRect()
            const x=  location.x - 0.7*window.innerWidth
            const y= location.y- window.innerHeight+60
            this.$refs.ball.style.transform=`translate(0px,${y}px)`
            this.$refs.inner.style.transform=`translate(${x}px,0px)`

        },
        enter(){
            this.$refs.ball.style.display='block'
            // 触发重绘
            document.body.offsetWidth


            this.$refs.ball.style.transform=`translate(0px,0px)`
             this.$refs.inner.style.transform=`translate(0px,0px)`
             
        },
        afterEnter(){
            this.$refs.ball.style.display='none'
            this.show=false
        },
        increase(e,item){
            
            var data={title:item.label,count:1}
            this.$store.commit('addCartArray',data)
            this.addButton=e.target
           
            this.show=true

        },
        // 点击左侧标签触发事件，遍历更改class并请求右侧数据
        handle(index,id){
        this.labels.forEach((item,ind)=>{
            
            if(ind==index){
                item.active=true
                this.getTags(item.id)
                
            }else{item.active=false}
             })
        },

       async getTags(id){
           
           try{
                var res = await this.$axios.get('/api/classify',{params:{id:id}})
            this.tags=res.data
           
           }catch(e){console.log(e)}
           
          
        }

    }
    
    
}
</script>
<style lang="less" scoped>
    .ball{
        transition:all 1s cubic-bezier(0.49,-0.29,0.75,0.41);
        position:fixed;
        color:red;
        left:68%;
        bottom:40px;
        z-index:10003;
        .inner{
            transition:all 1s linear
        }
    }

    i{margin-left:5px}
    .leftScroll{
        float: left;
        width:30%;
        li{
            background-color: #f8f8f8;
            color:#666;
            width:100%;
            height:1.5rem;
            margin-bottom:1px;
            line-height:1.5rem;
            font-size:16px; 
            &.active{
                background-color: #fff;
                color:red;

            }

        }

    }
    .rightScroll{
        width:70%;
        ul{
            display: flex;
            flex-wrap:wrap;

            li{
                margin:0rem 0.5rem  1rem;
                width:35%;
                img{width:100%}
                p{font-size:16px;}
                }
        }
        
    }
</style>