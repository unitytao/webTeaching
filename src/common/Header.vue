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
      <li class="nav-list-menu"><router-link to="/learn">课程</router-link></li>
      <li class="nav-list-menu"><router-link to="/courseWare">资源库</router-link></li>
      <li class="nav-list-menu"><a @click="checkLogin()">个人中心</a></li>
    </ul>
    <input class="select-input" v-model="selectIndex"/>
    <el-button size="mini"  type="info" icon="el-icon-search" @click="selectCourseByName()">搜索</el-button>
    <div class="my-profile">
      <RouterLink to="/login">{{userInfo.username || '登录 | 注册'}}</RouterLink>
    </div>
  </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqSelectCourseByName} from '../api/index.js'
  export default {
    data(){
      return{
        selectIndex:''
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
      checkLogin(){
        const name = this.$store.state.userInfo.username
        if(!name){
          this.$message('请先登录')
          this.time01 = setInterval(()=> {
              this.$router.push('/login')
            },500)
        }else {
          this.$router.push('/profile')
        }
      },
      selectCourseByName(){
        this.$router.push({
          path: `/select_page`,
          query: {
            selectIndex:this.selectIndex
          }
        })
      }
    },
    beforeDestroy() {
      clearInterval(this.time01)
    }

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
    text-decoration:none;
    color: black;
  }
  html{margin:0;padding:0;font-size:0.8rem !important;}
 /deep/.header.el-header{
    padding:0px
  }
</style>
