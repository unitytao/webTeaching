<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="220px">
        <SideNav />
        </el-aside>
        <el-main>
        <router-view></router-view>
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

</style>
