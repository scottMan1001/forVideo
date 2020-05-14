<template>
  <!-- <div>免费区{{list}}</div> -->
  <div>
    <h1>person Ver 1.0</h1>
  </div>
</template>

<script>
export default {
     name: "freeman",
      data(){
    return {
      list:''
    }
  },
     methods:{
       getData(){
         this.$http.get('/getData/a')
            .then(res=>{this.list=res.data;console.log(res)})
             .catch(err=>console.log(err))
       },
        getData1(){
         this.$http.get('/getData')
            .then(res=>{this.list=res.data;console.log(res)})
             .catch(err=>console.log(err))
       }
     },
     mounted(){
       this.getData();
       this.getData1();
     }
}
</script>

<style>
</style>