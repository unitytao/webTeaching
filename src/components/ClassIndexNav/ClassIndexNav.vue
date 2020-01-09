<template>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">课件</el-menu-item>
        <el-menu-item index="2">教学视频</el-menu-item>
        <el-menu-item index="3">Flash文件</el-menu-item>
        <el-menu-item index="4">Word文档</el-menu-item>
        <el-menu-item index="5">考试题目</el-menu-item>
        <el-menu-item index="6">课后作业</el-menu-item>
          <ClassSelect />
      </el-menu>
</template>

<script>
  import ClassSelect from '../CourseSelect/CourseSelect'
    export default {
    components : {
    ClassSelect
    }
    }
</script>
<style scoped>

</style>
