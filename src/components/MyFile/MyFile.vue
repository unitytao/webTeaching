<template>
  <div class="file-box-main">
    <ul>
      <div class="dsc-box">
        <li>
          <div class="file-name">文件名</div>
          <div class="file-type">分类</div>
          <div class="file-type">简介</div>
          <div class="create-time">创建时间</div>
          <div class="download-num">下载数量</div>
          <div class="review-button"></div>
        </li>
      </div>

      <li>
        <el-checkbox v-for="(item, index) in file.list" :key="index">
          <div class="icon-file"><span :class="item.iconType"></span></div>
          <div class="file-name">{{item.fileName}}</div>
          <div class="file-type">{{item.course}}</div>
          <div class="file-type">{{item.fileDsc}}</div>
          <div class="create-time">{{item.uploadTime}}</div>
          <div class="download-num">{{item.downloadNum}}</div>
          <div class="review-button"><el-button>下载</el-button></div>
        </el-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
  import {reqMyFile} from '../../api/index.js'
    export default {
      data(){
        return{
          file:''
        }
      },
      async mounted () {
        const uid =this.$store.state.userInfo.id
        console.log(uid)
        const result = await reqMyFile({owner:uid})
        console.log(result)
        this.file =result.queryResult.pageInfo
      }
    }
</script>

<style scoped>
  .file-box-main{
    text-align: left;
    margin-top: 20px;
    margin-left: 20px;
    width: 100%;
    height: 500px;
    display: inline-block;
    overflow: hidden;
  }
  .dsc-box{
    margin-left: 50px;
    font-size: 1.5em;
    color: #333333;
    margin-bottom: 10px;
  }
  .icon-file{
    display: inline-block;
    width: 20px;
  }
  .file-name {
    display: inline-block;
    width: 200px;
    text-align: left;
  }
  .create-time{
    display: inline-block;
    width: 200px;
  }
  .file-type{
    display: inline-block;
    width: 200px;
  }
  .review-button{
    display: inline-block;
    width: 56px;
    float: right;
    margin-left: 10px;
  }
  ul,li{
    padding:0;
    margin:0;
    list-style:none;
    text-align: left;
  }
  .icon-file{
    display: inline-block;
    width: 20px;
  }
  .file-name {
    display: inline-block;
    width: 200px;
    text-align: left;
  }
  .create-time{
    display: inline-block;
    width: 200px;
  }
  .file-type{
    display: inline-block;
    width: 200px;
  }
  .review-button{
    display: inline-block;
    width: 56px;
    float: right;
    margin-left: 10px;
  }
  .download-num{
    text-align: center;
    display: inline-block;
    width: 200px;
  }
</style>
