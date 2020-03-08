<template>
  <video style="width:960px;height:540px; object-fit: fill" controls>
    <source :src=getImgUrl(vedioUrl) type="video/mp4" ref="Src">
    您的浏览器不支持 video 标签。
  </video>

</template>

<script>
  import {mapState} from 'vuex'
    export default {
      data() {
        return {
        }
      },
    computed:{
      vedioUrl: function () {
        return this.$store.state.class.classMain
      }
    },
    mounted () {
    },
    methods:{
      getImgUrl(vedioUrl){
          return require("@/assets/vedio/" +vedioUrl)
      }
    }
    }
</script>

<style scoped>

</style>
