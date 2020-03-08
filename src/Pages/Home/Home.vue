<template>
<div>
    <Header />
    <div class="main-content">
      <div style="width: 14%; height: 374%;float: left;display: inline-block;margin-left: 120px;margin-top: 45px">
        <HomeSideNav />
      </div>

      <div class="cal-block">
        <el-carousel height="350px">
          <el-carousel-item v-for="item in carouselList" :key="item.key">
            <img :src= 'item.url' width="100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <RightLoginBox />
    </div>
</div>
</template>
<script>
  import Header from "../../common/Header.vue"
  import RightLoginBox from "../../components/RightLoginBox/RightLoginBox.vue"
  import HomeSideNav from "../../components/HomeSideNav/HomeSideNav.vue"

  export default {
    data () {
      return {
        carouselList: [
          { key: 0, url:require( './img/02.png')},
          { key: 1, url:require( './img/01.png')},
          { key: 3, url:require( './img/03.jpg')},
          { key: 2, url:require( './img/04.jpg')},
        ]
      }
    },
    components: {
      RightLoginBox,
      HomeSideNav,
      Header
    }
  }
</script>

<style scoped>
  html, body
  {
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    min-width: 1400px;
  }
  .main-content{
    width: 100%;
    height: 100%;
    margin: 0px;
    position: relative;
    background-color: #f0f0f0;
  }
  .cal-block{
    margin-left: -55px;
    margin-top: 25px;
    width: 52%;
    height: 400px;
    position: relative;
    display:inline-block;
    padding-top: 20px;
    left:85px;
  }
</style>

