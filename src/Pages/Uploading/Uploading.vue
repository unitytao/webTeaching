<template>
  <div>
    <Header />
  <div class="upload-box">
    <div class="head">
      <h2>文件上传</h2>
    </div>

    <div class="item-box">
      <div class="dsc-span-name">
        <span >文件名 ：</span>
      </div>
      <div class="dsc-span">
        <el-input v-model="FileName"></el-input>
      </div>
    </div>
    <div class ="item-box">
      <div class="dsc-span-name">
        <span >文件简述 ：</span>
      </div>
      <div class="dsc-span">
        <el-input v-model="dsc" type="textarea"></el-input>
      </div>
    </div>
    <div class ="item-box">
      <div class="name-dsc-span">
        <span>文件类型 ：</span>
      </div>
      <div class ="dsc-span">
        <el-select v-model="FileType" placeholder="请选择文件类型">
          <el-option label="视频" value="VEDIO"></el-option>
          <el-option label="课件" value="PPT"></el-option>
        </el-select>
      </div>
    </div>
    <div class ="item-box">
      <div class="name-dsc-span">
        <span>学科所属 ：</span>
      </div>
      <div class ="dsc-span">
        <el-select v-model="course" placeholder="请选择文件所属学科">
          <el-option label="计算机与科学" value="计算机与科学"></el-option>
          <el-option label="外语" value="计算机与科学"></el-option>
        </el-select>
      </div>
    </div>
    <div class="item-box">
      <el-upload
        ref="upload"
        class="upload-demo"
        action="/api/FileDto/import"
        :data={fileName:this.FileName,fileDsc:this.dsc,owner:this.$store.state.userInfo.id,course:this.course,type:this.FileType,fileStatus:this.fileStatus,downloadNum:this.downloadNum}
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :before-upload="sendData"
        :on-success="handleSuccess"
        :auto-upload="false">

        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
  </div>
</template>

<script>
  import Header from '../../common/Header'
  import {reqSendData} from '../../api/index.js'
  export default {
    data() {
      return {
        fileList:[],
        dsc:'',
        FileType:'',
        course:'',
        FileName:'',
        owner:'',
        date:'',
        fileStatus:1,
        downloadNum:0
      }
    },
    methods: {
      handleSuccess(response){
        console.log(response)
      },
      async submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
       sendData(){
        this.owner =this.$store.state.userInfo.username
        console.log(this.owner)
        //获取时间
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        this.date= yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss
        console.log(this.date)
      }
    },
    components:{
      Header
    }
  }
</script>
<style>
  .head{
    margin: auto;
    text-align: center;
  }
  .upload-box{
    width: 75%;
    margin: auto;
  }
  .dsc-span{
    display: inline-block;
    width: 90%;
  }
  .item-box{
    margin-top: 20px;
  }
  .name-dsc-span{
    display: inline-block;
    width: 85px;
  }
  .dsc-span-name{
    display: block;
  }
</style>
