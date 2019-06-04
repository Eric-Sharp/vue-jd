module.exports = {
  configureWebpack:{
    devServer:{
      

      before(app){
        let slide= [
          {
            url: 'https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            image: 'https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            url: 'https://images.pexels.com/photos/946435/pexels-photo-946435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            image: 'https://images.pexels.com/photos/946435/pexels-photo-946435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            url: 'https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            image: 'https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
        ]
        let database =[{username:'zhangsan',password:'zhangsan'},{username:'lisi',password:'lisi'}]
        tokenKey='md5'
        app.get('/api/register',(req,res)=>{
          if (database.filter(item=>{return item.username==req.query.username}).length>0){
            console.log(req.query)
           
            res.json({success:false,message:'用户已被注册'})}
             else{res.json({success:true,message:'注册成功',req:req.query})}

            }
          
            
        )
            app.get('/api/login',(req,res)=>{
             var {username,password}=req.query
             console.log(req.query)
            //  database.filter(item=>{return item.username==username&& item.password==password}).length>0
              if(database.filter(item=>{return item.username==username&& item.password==password}).length>0){
                  var token = username+tokenKey+((new Date()).getTime()+60*60*1000)
                  res.json({token,code:0,message:'登陆成功',success:true})
              }else{
                res.json({success:false,message:'用户名或密码错误',code:-1})
              }
            })

            app.get('/api/slide',(req,res)=>{
              res.json(slide)

            })

            app.get('/api/rollinglist',(req,res)=>{
              res.json([[{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              },{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              },{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              },{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              },{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              },{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              },{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              },{
                url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                label:'分类1'

              }],[
                {
                  url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                  label:'分类2'
  
                },{
                  url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                  label:'分类2'
  
                },{
                  url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                  label:'分类2'
  
                },{
                  url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                  label:'分类2'
  
                },{
                  url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                  label:'分类2'
  
                },{
                  url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                  label:'分类2'
  
                },{
                  url:'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  image:"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                  label:'分类2'
  
                },


              ]])

            })

            app.get('/api/classify' ,(req,res)=>{
              var id= parseInt(req.query.id)
              console.log(id)
                  switch(id){
                    case 0:
                    res.json([
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      
                  ])
                  break;
                  case 1:
                    res.json(
                      [
                        {
                            image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                            label:'华为'
                        },
                        {
                            image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                            label:'华为'
                        },
                        {
                            image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                            label:'华为'
                        },
                        {
                            image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                            label:'华为'
                        }
                    ]
                    )
                    break;
                  case 2:
                    res.json([
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                  ])
                    break
                  case 3:
                    res.json([
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                  ])
                  break
                case 4:
                  res.json([
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                ])
                  break
                

                  }  


            })
      }
      }
    
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
