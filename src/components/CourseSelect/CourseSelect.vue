<template>
  <div class="course-select-box">
    <input class="course-select-input" />
    <select  class="select-option-value">
      <option value="" disabled selected hidden>请选择文件类型</option>
      <option label="PPT" value="01"></option>
      <option label="Word" value="02"></option>
    </select>
    <el-button size="mini"  type="info" icon="el-icon-search" >搜索</el-button>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .course-select-input{

    width: 300px;
    height: 30px;
    margin-top: 10px;
    display: inline-block;
  }
  .select-option-value{
    height: 30px;
    width: 100px;
    font-size: 11px;
    display: inline-block;
  }

  .course-select-box{
    width: 500px;
    height: 32px;
    display: inline-block;

  }
</style>
