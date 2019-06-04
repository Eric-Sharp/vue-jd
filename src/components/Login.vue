<template>
    <div>
      <cube-form
  :model="model"
  :schema="schema"
  
  @submit="submitHandler"
  ></cube-form>  
    <hr>
    <p>用户名：'lisi',密码'lisi'</p>
    </div>
</template>
<script>
import store from '../store.js'
export default {
    data(){
        return{
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[ 
                {
                type: 'input',
                modelKey: 'username',
                label: '用户名',
                props: {
                  placeholder: '请输入'
                },
                rules: {
                  required: true,
                  min:3
        
                },
                // validating when blur
                trigger: 'blur'
              }, 
              {
                type: 'input',
                modelKey: 'password',
                label: 'Input',
                props: {
                    type:'password',
                    eye:{open:false},
                  placeholder: '请输入'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },{
                  type:'submit',
                  label:'登陆'
              }]
                 

            }


        }
    },
    methods:{
      async  submitHandler(e){
            e.preventDefault()
             var result = await this.$axios.get('/api/login',{params:this.model})
             console.log(result.data)
             if(result.data.code==0){
               localStorage.setItem('token',result.data.token)
               this.$store.commit('settoken',result.data.token)
               if(this.$route.query.redirect){
                  this.$router.replace({path:this.$route.query.redirect})
               }else{
                 this.$router.replace('/botbar/home')
               }
             } 
        }
    }

}
</script>
<style lang="less" scoped>
    
</style>