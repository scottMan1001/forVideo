<template>
  <div>免费区{{list}}</div>
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
         this.$http.get('/getData1')
            .then(res=>{this.list=res.data;console.log(res)})
             .catch(err=>console.log(err))
       }
     },
     mounted(){
       this.getData()
     }
}
</script>

<style>
</style>