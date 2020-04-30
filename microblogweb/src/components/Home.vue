<template>
    <!-- <h1>Home页面</h1> -->
    <div class="main">
        <div v-for="item in list" :key="item" class="videopic u-lof4">
      {{item}}
    </div>
    </div>
    
   
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      list:[1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }
};
</script>

<style scoped>


div.main{
  display: flex;
  flex-direction: row;
  max-width: 1800px;
  padding:20px 45px;
  flex-wrap: wrap;
  flex:1;
  justify-content: center;
  align-items: center;
 

}
div.videopic{
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 250px;
  margin:10px;
  /* flex:1 */
  /* margin-right: 20px; */
}
div.videopic:hover{
  /* background-color: rgb(247, 223, 227); */
  transform: scale(1.05);
}
.u-lof4{
  flex: 0 0 22%
}
</style>