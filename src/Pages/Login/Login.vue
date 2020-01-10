<template>
  <div class="login-box showed">
    <div class="hide-login-btn">
    </div>
    <form class="login-form">
      <h1>Welcome</h1>
      <input class="txtb" type="text" name="" placeholder="Username">
      <input class="txtb" type="password" name="" placeholder="Password">
      <button class="login-btn" @click="aa()">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      aa(){
        this.$router.push({path :'/peofile'})
      }
    }
  }

</script>

<style scoped>
  * {
    font-family: 'montserrat', sans-serif;
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
</style>
