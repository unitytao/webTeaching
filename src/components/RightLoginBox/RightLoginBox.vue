<template>
  <div class="rightLogin">
    <span class="loginTitle">免费学习名校名师的精品课程</span>
    <img src="./img/advant.png" class="userImg"/>
    <br />
    <button class="lbt" @click="toLogin()">登录</button>
    <br />
    <span class="lab-txt">网易和高等教育出版社出品</span>
  </div>
</template>

<script>
  export default {
      methods:{
        toLogin(){
          this.$router.push('/login')
        }
      }
    }
</script>

<style scoped>
  .rightLogin{
    width: 14%;
    height: 352px;
    position: relative;
    text-align: center;
    display: inline-block;
    float: right;
    margin-top: 45px;
    margin-right: 8%;
    background-color: white;
    border-radius: 8px;
  }
  .userImg{
    width: 41.5%;
    height: 86px;
    position: revert;
    margin-top: 50px;
  }
  .loginTitle{
    line-height: 22px;
    display: inline-block;
    width: 100%;
    font-size: 1.2em;
    color: #333333;
    text-align: center;
    display: inline-block;
  }
  img{
    width: 39.5%;
    height: 39.5%;
    border-radius: 42.4419px;
    margin-top: 50px;
    display: inline-block;
  }
  .lbt{
    line-height: 36px;
    display: inline-block;
    width: 80%;
    height: 37.8px;
    border-radius:16px;
    background-color: #08802a;
    margin-top: 25px;
    border:none;
  }
  .lab-txt{
    font-size: 1em;
    display: inline-block;
    margin-top: 50px
  }
</style>
