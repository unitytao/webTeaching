<template>
<div>
  <el-upload
    ref="upload"
    class="upload-demo"
    drag
    action="/api/FileDto/import"
    with-credentials
    :on-success="handleSuccess"
    multiple>
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
  <el-button @click="recordGoal()">保存</el-button>
</div>
</template>

<script>
    export default {
      data(){
        return{
          MainUrl:''
        }
      },
      methods:{
        recordGoal(){
          const classUrl =this.MainUrl
          this.$store.dispatch('recordClassMain',classUrl)
          this.$message('保存成功')
        },
        handleSuccess(response){
          const url =response.queryResult.pageInfo.list[0]
          this.MainUrl =url
          console.log(this.MainUrl)
        },
      }
    }
</script>

<style scoped>

</style>
