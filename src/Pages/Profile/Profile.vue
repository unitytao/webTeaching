<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="220px">
        </el-aside>
        <el-main>
          <div style="display: inline-block">
            <ul>
              <li>
                <router-link to="/profile/class">我的课程</router-link>
              </li>
              <li>
                <router-link to="/profile/file">我的课件</router-link>
              </li>
              <li>
              <router-link to="/createPage">创建新的课程</router-link>
              </li>
              <li>
                <router-link to="/uploading">上传资料</router-link>
              </li>
            </ul>
          </div>
          <div style="display: inline-block;width: 100%;height: 100%">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '../../common/Header.vue'
  import SideNav from '../../components/SideNav/SideNav.vue'
  export default {
    components:{
      Header,
      SideNav
    }
  }
</script>

<style scoped>
ul,li{
  list-style: none;
  display: inline-block;
}
a {
  text-decoration: none;
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
