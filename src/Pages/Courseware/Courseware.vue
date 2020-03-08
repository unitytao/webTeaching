<template>
  <div class="course-select-page">
    <el-container>
      <el-header>
          <!--<div class="course-select-title">
            <div class="index-home">
              <router-link to="/home">
                返回首页
              </router-link>
            </div>
            <span style="display: inline-block;margin-left: -100px">课件搜索</span>
          </div>-->
       <Header />
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
  import Header from '../../common/Header'
  import {mapState} from 'vuex'
  export default {
    data (){
      return{
        sideIndex:['外语','计算机与科学','考研','理工补习','四六级','考证就业'],
        navIndex:['课件','视频','课件','Flash','world','考试题目','课后作业']
      }
    },
    components :{
      ClassIndexNav,
      fileBOX,
      SideNav,
      Header
    },
    computed:{
      ...mapState(['file'])
    },
    mounted () {
      const keyword = ''
      const type = ''
      const timeStatus =''
      const course =''
      this.$store.dispatch('recordFileData',{keyword,type,timeStatus,course})
    }
  }
</script>

<style scoped>
  a{
    text-decoration:none;
    color: black;
  }
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
    background-color:#545c64;
  }
  /deep/.el-main{
    height: auto;
    padding: 0px;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
  /deep/.el-header{
    padding: 0px;
  }

</style>
