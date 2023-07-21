<script>
  import axios from 'axios'
  export default {
    name: 'App',
    created () {
      // 如果请求本地的数据的话，需要将data.json文件放入到public静态资源目录中才可以。
      // axios.get('/data.json').then(res=>{
      //   console.log('res--->',res)
      // })

      // 请求线上卖座的数据
      // 跨域？ 因为浏览器的同源策略导致跨域（协议、域名、端口只要任何一个不一致就会跨域）
      // 解决方案? jsonp(只能解决get请求跨域！)  CORS(后端设置Access-Control-Allow-Origin:'*')
      // axios({
      //   url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5549391',
      //   headers: {
      //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16804846362473716478902273","bc":"310100"}',
      //     'X-Host': 'mall.film-ticket.film.list'
      //   }
      // }).then(res=>{
      //   console.log(res)
      // })


      // 请求猫眼的数据
      // 前端配置代理的方式解决跨域问题
      axios.get('/db/in_theaters?limit=5').then(res=>{
        console.log(res)
      })

    }
  }  
</script>  

<template>  
  <div>
    App
  </div>
</template>

<style lang="scss">
  
</style>
