<template>
  <div class="login-box showed">
    <div class="hide-login-btn">
    </div>
    <form class="login-form">
      <h1>登录</h1>
      <input class="txtb" type="text" v-model="username" placeholder="用户名">
      <input class="txtb" type="password"  v-model="password" placeholder="密码(6-20位非纯数字/字符)">
      <button class="login-btn" @click="Login()">登录</button>
      <div class="register-text">
        <router-link to="/register">
          没有账户，立即注册
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import {reqPwdLogin} from "../../api";


  export default {
    data () {
      return {
        username: '', // 用户名
        password: '', // 密码
      }
    },
    methods: {
      async Login(){
        // 密码登陆
        let result
        const {username, password} = this
        if(!this.username) {
          // 用户名必须指定
          this.$message('用户名必须指定')
          return
        } else if(!this.password) {
          // 密码必须指定
          this.$message('密码必须指定')
          return
        }else if (!(/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(this.password))) {
          // 密码必须指定
          this.$message('密码格式错误')
          return
        }else{
          result = await reqPwdLogin ({username, password});
          // 发送ajax请求密码登陆
          if(result.code ===0){
          //将username保存到vuex的state
          this.password =''
           const userInfo =result.queryResult.pageInfo.list[0]
          this.$store.dispatch('recordUser',userInfo)
          this.$router.replace('/home')
          }else {
            const msg = result.message
            this.$message(msg)
        }
        }
      }
    }
  }

</script>

<style scoped>
  * {
    font-family: 'montserrat', sans-serif;
  }
  a{
    text-decoration:none !important;
    color:white !important;
  }
  .login-box {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-image: url("./img/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /*定义 2D 转换8 */
    color: white;
    text-align: center;
  }
  .login-form h1 {
    font-weight: 400;
    margin-top: 0;
  }
  .txtb {
    display: block;
    box-sizing: border-box;
    width: 240px;
    background: #ffffff;
    border: 1px solid white;
    padding: 10px 20px;
    color: black;
    outline: none;
    margin: 10px 0;
    border-radius: 6px;
    text-align: center;
  }
  .login-btn {
    width: 240px;
    background: #d3dce6;
    border: 0;
    color: black;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
  }
  .hide-login-btn {
    color: #000;
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
    font-size: 30px;
    opacity: 0.7;
    transform: rotate(45deg); /*定义 2D 转换8 */
  }
  .showed {
    left: 0;
  }
  .register-text{
    display: block;
    box-sizing: border-box;
    width: 240px;
    margin-top: 5px;
  }
</style>
