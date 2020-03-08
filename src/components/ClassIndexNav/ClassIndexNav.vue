<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click="changeNavIndex(0)">课件</el-menu-item>
      <el-menu-item index="2" @click="changeNavIndex(1)">教学视频</el-menu-item>
      <el-menu-item index="3" @click="changeNavIndex(2)">Flash文件</el-menu-item>
      <el-menu-item index="4" @click="changeNavIndex(3)">Word文档</el-menu-item>
      <el-menu-item index="5" @click="changeNavIndex(4)">考试题目</el-menu-item>
      <el-menu-item index="6" @click="changeNavIndex(5)">课后作业</el-menu-item>
      <ClassSelect />
    </el-menu>
  </div>
</template>

<script>
  import ClassSelect from '../CourseSelect/CourseSelect'
    export default {
    data(){
      return{
        navIndex:['PPT','视频','FLASH','文本','PDF','ZIP'],
        course:'',
        type:'',
        keyword:'',
        timeStatus:''
      }
    },
    components : {
    ClassSelect
    },
    methods : {
      changeNavIndex(i){
        const course =this.course
        const type =this.navIndex[i]
        const keyword = this.keyword
        const timeStatus =this.timeStatus
        this.$store.dispatch('recordFileData',{keyword,type,timeStatus,course})
      }

    }
}
</script>
<style scoped>

</style>
