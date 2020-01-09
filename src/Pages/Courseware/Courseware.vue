<template>
  <div class="course-select-page">
    <div class="course-select-title">
      <div class="index-home">
        <router-link to="/home">
          返回首页
        </router-link>
      </div>
      <span style="display: inline-block;margin-left: -100px">课件搜索</span>
    </div>
    <div class="select-page-main">
      <ClassIndexNav />
    </div>

  </div>
</template>

<script>
  import ClassIndexNav from '../../components/ClassIndexNav/ClassIndexNav.vue'
  export default {
    components :{
      ClassIndexNav
    }
  }
</script>

<style scoped>
  .select-page-main{
    text-align: center;
    width: 100%;
    margin-top: 20px;
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

</style>
