<template>
  <div class="course-select-box">
    <input class="course-select-input" v-model="keyword"/>
    <select  class="select-option-value" v-model="type">
      <option value="" disabled selected hidden>请选择文件类型</option>
      <option label="全部" value=""></option>
      <option label="PPT" value="PPT"></option>
      <option label="Word" value="WORD"></option>
    </select>
    <el-button size="mini"  type="info" icon="el-icon-search" @click="selectClass()">搜索</el-button>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          course:'',
          type:'',
          keyword:'',
          timeStatus:''
        }
      },
      methods:{
        selectClass(){
          const course =this.course
          const type =this.type
          const keyword = this.keyword
          console.log(keyword)
          const timeStatus =this.timeStatus
          this.$store.dispatch('recordFileData',{keyword,type,timeStatus,course})
        }
      }
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
