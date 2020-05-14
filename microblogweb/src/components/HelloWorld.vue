<template>
  <div oncontextmenu="return false">
    <h1>富贵提供资源</h1>
    <video id="videoId" controlslist="nodownload" ref='video' controls="true" height="500" width="auto" download="false"></video>
  </div>
</template>

<script>
import flvjs from "flv.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created(){
     
  },
  mounted() {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById("videoId");
   
      this.$refs.video["disablePictureInPicture"]=true;

      console.log("++++++++++++");
      console.log(flvjs);
      var flvPlayer = flvjs.createPlayer({
        type: "mp4",
        url: "http://127.0.0.1:3000/media/test_1.mp4"
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();

     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
