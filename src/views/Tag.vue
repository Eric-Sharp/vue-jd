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
                        <p>{{item.label}}<i class="cubeic-add" @click='increase(item)'></i></p>
                    </li>

                </ul>

        </cube-scroll>
    </div>
</template>
<script>
export default {
    data(){
        return{
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
        increase(item){
            var data={title:item.label,count:1}
            this.$store.commit('addCartArray',data)
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