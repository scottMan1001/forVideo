<template>
  <!-- <h1>Home页面</h1> -->
  <div class="main" oncontextmenu="return false">
    <div style="position:absolute;top:10px">
      <router-link to="/home">每日必看</router-link> | &nbsp;&nbsp;
     <router-link to="/hello">精品推荐</router-link> | &nbsp;&nbsp;
      <router-link to="/freeman">freeman</router-link>
    </div>
     
    <div v-for="item in list" :key="item" class="videopic u-lof4">
      <!-- {{item}} -->
      <video
        :id="gernerateId(item)"
        controls="true"
        height="auto"
        controlslist="nodownload"
        ref="video"
        width="100%"
        @click="clickAlert(item)"
      ></video>
    </div>
    
  </div>
  <!-- <div>***</div> -->
</template>

<script>
import flvjs from "flv.js";
export default {
  name: "home",
  data() {
    return {
      // list:[1,2,3,4,5,6,7,8,9,10,11,12]
      list: [1, 2, 3, 4]
    };
  },
  methods: {
    gernerateId(item) {
      return "videoId_" + item;
    },
    clickAlert(item){
      console.log(item)
    }
  },

  mounted() {
    //  console.log("002");
    if (flvjs.isSupported()) {
      // console.log("001");
      // console.log(flvjs);
      this.list.map(item => {
        //  console.log("++++++++++++："+item);
        var videoElement = document.getElementById("videoId_"+item);
         this.$refs.video[item-1]["disablePictureInPicture"]=true;
        // console.log("$refs+++++++++")
        // console.log(this.$refs)
        var flvPlayer = flvjs.createPlayer({
          type: "mp4",
          url: `http://127.0.0.1:3000/media/test_${item}.mp4`
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
       
      });
      // var videoElement = document.getElementById("videoId_");

      // flvPlayer.play();
    }
  }
};
</script>

<style scoped>
div.main {
  display: flex;
  flex-direction: row;
  max-width: 1800px;
  padding: 20px 45px;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
  align-items: center;
}
div.videopic {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 250px;
  margin: 10px;
  /* flex:1 */
  /* margin-right: 20px; */
}
div.videopic video{
  border-radius: 10px
}
div.videopic:hover {
  /* background-color: rgb(247, 223, 227); */
  transform: scale(1.05);
}
.u-lof4 {
  flex: 0 0 33%;
}
</style>