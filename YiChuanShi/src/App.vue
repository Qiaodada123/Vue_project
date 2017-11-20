<template>
  <div id="app">
      <!-- 头部 -->
        
        

        <section><!-- 路由容器 -->
          <router-view></router-view>   
        </section>


        
  </div>
 
</template>

<script>
// import navbar from '@/components/common/navbar';


export default {
  name: 'app',
  data(){
    return {

    }
  },
  components:{
    
   
  }
}

</script>

<style lang="scss" >
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height: 100%;
}


</style>
