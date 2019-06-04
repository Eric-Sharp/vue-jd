<template>
    <div>
      <cube-form
  :model="model"
  :schema="schema"
  
  @submit="submitHandler"
  ></cube-form>  
    </div>
</template>
<script>

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
                  label:'提交'
              }]
                 

            }


        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault()        
            this.$axios.get('/api/register/',{params:this.model}).then(
              response=>{console.log(response.data)}
              
            ).catch(err=>{console.log(err)})
        }
    }

}
</script>
<style lang="less" scoped>
    
</style>