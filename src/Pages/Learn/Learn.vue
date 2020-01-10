<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <div class="learn-box">
        <ClassBox />
        <ClassBox />
        <ClassBox />
        <ClassBox />
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import Header from "../../common/Header"
  import ClassBox from "../../components/ClassBox/ClassBox"
  export default {
    components:{
      Header,
      ClassBox
    }
  }
</script>

<style scoped>
  html{
    margin: 0px;
    padding: 0px;
    height: 100%;
  }
  body{
    width: 100%;
    padding: 0px;
    height: 100%;
  }
.learn-box{
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #d3dce6;
}
  /deep/.el-main{
    display: block;
    padding: 0px;
    margin: 0px;
  }
  /deep/.el-header{
    padding: 0px;
    margin: 0px;
  }
</style>

