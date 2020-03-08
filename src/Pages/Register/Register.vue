<template>
  <div class="login-box showed">
    <div class="hide-login-btn">
    </div>
    <form class="login-form">
      <h1>用户注册</h1>
      <div style="width: 50%">
        <el-select v-model="roleId" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <input class="txtb" type="text" v-model="username" placeholder="用户名">
      <input class="txtb" type="text"  v-model="phone" placeholder="手机号码">
      <input class="txtb" type="password"  v-model="password" placeholder="密码(6-20位非纯数字/字符)">
      <input class="txtb" type="password"  v-model="pwd2" placeholder="再次输入密码">
      <button class="login-btn" @click="register()">注册</button>
      <div class="register-text">
      </div>
    </form>
  </div>
</template>

<script>
    import {reqPwdRegister} from '../../api/index'
  export default {
    data () {
      return {
        options: [{
          value: 1,
          label: '学生'
        }, {
          value: 2,
          label: '老师'
        }],
        username: '', // 用户名
        password: '', // 密码
        pwd2: '',//再次输入的密码
        phone: '',
        roleId:1,
      }
    },
    methods: {
      async register() {
        let result;
        const {username, password, phone, roleId} = this;
        if (!this.username) {
          // 用户名必须指定
          this.$message('用户名不能为空');
          return
        }if (!this.roleId) {
          // 用户名必须指定
          this.$message('请选择类型');

        }
        else if(!this.phone){
          this.$message('手机号不能为空');

        }else if(!(/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(this.phone))){
          this.$message('手机号码不规范');

        } else if (!this.password) {
          // 密码必须指定
          this.$message('密码不能为空');

        } else if (!(/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(this.password))) {
          // 密码必须指定
          this.$message('密码格式错误');

        }
        else if(!this.pwd2){
          this.$message('请确认密码');

        } else if(this.password!==this.pwd2){
          this.$message('两次密码不同');

        }else {
          result = await reqPwdRegister({username, password, phone,roleId});
          if(result.code ===0){
            this.$store.dispatch('recordUser', {username: username})
            this.username ='';
            this.password ='';
            this.phone ='';
            this.$message('登陆成功');
            this.$router.replace('/home')
          }else {
            const msg = result.message;
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
