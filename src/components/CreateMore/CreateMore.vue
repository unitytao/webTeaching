<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://localhost:8090/FileUp/import"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">保存</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button @click="recordMore()">保存</el-button>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        };
      },
      methods: {
        submitUpload() {
          this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        recordMore(){
          const classMore = this.fileList
          this.$store.dispatch('recordClassMore',classMore)
          this.$message('保存成功')
        }
      }
    }
</script>

<style scoped>
  li{
    padding:0;
    margin:0;
    list-style:none;
    text-align: left;
  }
  ul{
    padding:0;
    margin:0;
    list-style:none;
    text-align: left;
  }
</style>
