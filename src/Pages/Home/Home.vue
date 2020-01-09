<template>
<div>
  <Header />
    <div class="main-content">
      <div style="width: 210px; height: 378px;float: left;display: inline-block">
        <SideNav />
      </div>

      <div class="cal-block">
        <el-carousel height="350px">
          <el-carousel-item v-for="item in carouselList" :key="item.key">
            <img :src= 'item.url'/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <RightLoginBox />
    </div>
</div>
</template>
<script>
  import Header from "../../common/Header"
  import RightLoginBox from "../../components/RightLoginBox/RightLoginBox.vue"
  import SideNav from "../../components/SideNav/SideNav.vue"

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
      Header,
      RightLoginBox,
      SideNav
    }
  }
</script>

<style scoped>
  .main-content{
    width: 100%;
    height: 500px;
    margin: auto;
    position: relative;
    background-color: #f0f0f0;
  }
  .cal-block{
    margin-top: 25px;
    width: 780px;
    height: 400px;
    position: relative;
    display:inline-block;
    padding-top: 20px;
    left:85px;

  }
</style>

