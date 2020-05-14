<template>
<div>
   <Header></Header>
  <div id="app">
  
      <!-- <router-link to="/home">每日必看</router-link> | &nbsp;&nbsp;
     <router-link to="/hello">精品推荐</router-link> | &nbsp;&nbsp;
      <router-link to="/freeman">freeman</router-link> -->
    <router-view/>
  
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   
    
  </div>
  <Footer></Footer>
</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
   /* background-color: rgba(211, 211, 255, 0.5) */
}
router-link:active{
  color:red
}

</style>
