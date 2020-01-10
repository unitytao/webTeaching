<template>
  <div class="course-select-page">
    <el-container>
      <el-header>
          <div class="course-select-title">
            <div class="index-home">
              <router-link to="/home">
                返回首页
              </router-link>
            </div>
            <span style="display: inline-block;margin-left: -100px">课件搜索</span>
          </div>
        </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="side-nav-select">
            <SideNav />
          </div>
        </el-aside>
        <el-main>
          <div class="select-page-main">
            <ClassIndexNav />
            <file-b-o-x />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import ClassIndexNav from '../../components/ClassIndexNav/ClassIndexNav.vue'
  import fileBOX from '../../components/fileBox/fileBox.vue'
  import SideNav from '../../components/SideNav/SideNav.vue'
  export default {
    components :{
      ClassIndexNav,
      fileBOX,
      SideNav
    }
  }
</script>

<style scoped>
  .select-page-main{
    text-align: center;
    width: 100%;
    height: 1000px;
  }
  .index-home{
    width: 100px;
    position: relative;
    float: left;
    font-size: 16px;
    color: black;
  }
  .course-select-title{
    text-align: center;
    color: #999999;
    font-size: 24px;
  }
  .course-select-page{
    width: 100%;
    height: 1000px;
  }
  .side-nav-select{
    width: 200px;
    height: 100%;
    display: inline-block;
    float: left;
    background-color: #ffffff;
  }
  /deep/.el-main{
    height: auto;
    padding: 0px;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

</style>
