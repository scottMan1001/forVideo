<template>
  <div class="login">
    <span @click="register()">注册</span>&nbsp;&nbsp;&nbsp;&nbsp;<span @click="login()">登录</span>
  </div>
</template>

<script>
export default {
   methods:{
     register(){
      //  alert('注册')
      this.$router.push({path:'/register'})
     },
     login(){
      //  alert('登录')
       this.$router.push({path:'/login'})
     }
   }
}
</script>

<style>
.login{
       display: inline-block;
        height: 35px;
        /* background-color: black; */
        color:white;
        line-height: 35px;
        position: absolute;
        right: 35px
        /* width: 100%; */
}

</style>