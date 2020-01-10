<template>
  <div>
  <div class="nav">
    <div class="nav-logo">
      <router-link to="/home">
        <img src="./img/logo.png">
      </router-link>
    </div>
    <ul class="nav-list">
      <li class="nav-list-menu"><router-link to="/home">首页</router-link></li>
      <li class="nav-list-menu"><router-link to="/learn">学习</router-link></li>
      <li class="nav-list-menu"><router-link to="/courseWare">资源库</router-link></li>
      <li class="nav-list-menu"><router-link to="/creatClass">新建课程</router-link></li>
    </ul>
    <input class="select-input" />
    <el-button size="mini"  type="info" icon="el-icon-search" >搜索</el-button>
    <div class="my-profile">
      <RouterLink to="/login">登录 | 注册</RouterLink>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .nav{
    padding: 0px;
    width: 100%;
    height: 50px;
    display: inline-flex;
  }
 .nav-logo{
   width: 217px;
   height: 32px;
   display: flex;
 }
  ul{
    width: 350px;
    height: 48px;
    list-style: none;
    display: inline-block;
  }
  .nav-list-menu{
    width: 75px;
    height: 45px;
    font-size: 15px;
    display: inline-block;
  }

  .select-input{
    width: 300px;
    height: 30px;
    margin-top: 10px;
  }
  .my-profile{
    transform: translateX(350px);
    padding-top: 15px;
    width: 100px;
    height: 38px;
    display: flex;
  }
  .el-button{
   height:36px;
    margin-top: 10px;
  }
  a{
    text-decoration:none
  }
</style>
