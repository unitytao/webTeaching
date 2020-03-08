<template>
  <div>
  <Header />
  <div class="upload-box">
    <div class="head">
      <h2>创建课程</h2>
    </div>
    <div class="item-box">
      <div class="name-dsc-span">
        <span >课程名 ：</span>
      </div>
      <div class="dsc-span">
        <el-input v-model="className"></el-input>
      </div>
    </div>
    <div class="item-box">
      <div class="name-dsc-span">
        <span >课程所属学校 ：</span>
      </div>
      <div class="dsc-span">
        <el-input v-model="school"></el-input>
      </div>
    </div>
    <div class="item-box">
      <div class="name-dsc-span">
        <span>学科所属 ：</span>
      </div>
      <el-select v-model="type" placeholder="请选择课程所属学科">
        <el-option label="计算机与科学" value="计算机与科学"></el-option>
        <el-option label="外语" value="外语"></el-option>
      </el-select>
    </div>
    <div class="item-box">
        <el-upload
          ref="upload"
          :data={uid:this.$store.state.userInfo.id,classname:this.className,school:this.school,type:this.type,url:this.Url,browse:this.browse,status:this.status}
          action="/api/course/insert"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :auto-upload="false"
          :on-success="handleSuccess"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      <div>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <el-button @click="submitUpload()">submit</el-button>
  </div>
  </div>
  </div>
</template>

<script>
  import  Header from '../../common/Header'
  import {reqCourseId} from '../../api/index.js'
  import {getUID} from '../../api/fun.js'
  export default {
      name: 'HelloWorld',
      data () {
        return {
          className:'',
          school:'',
          type:'',
          dialogImageUrl: '',
          dialogVisible: false,
          Url:getUID(),
          browse:0,
          status:1
        }
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true
          console.log(file.response)
        },
        submitUpload() {
          this.$refs.upload.submit();
        },
        async handleSuccess(response){
          this.$message(response.message)
          this.$store.dispatch('recordClassUrl',this.Url)
          const Url =this.Url
          console.log(Url)
          const result =await reqCourseId({url: Url})
          if(result.code ===0){
            //将username保存到vuex的state
            const cid =result.queryResult.pageInfo.list[0].id
            this.$router.push({ path: '/creatClass', query: { cid: cid }});
          }else {
            const msg = result.message
            this.$message(msg)
          }

        }
      },
    components:{
      Header
    }
  }
</script>

<style scoped>
  .upload-box{
    padding-top: 20px;
    width: 50%;
  }
   .user-header{
     position: relative;
     display: inline-block;
   }
  .user-header-com{
    width: 144px;
    height: 144px;
    display: inline-block;
  }
  .header-upload-btn{
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
  }
  .tip{
    font-size: 14px;
    color: #666;
  }
  /* error是用于错误提示 */
  .error{
    font-size: 12px;
    color: tomato;
    margin-left: 10px;
  }
  .head{
    margin: auto;
    text-align: center;
    font-family: 宋体;

  }
  .upload-box{
    width: 75%;
    margin: auto;
  }
  .dsc-span{
    display: inline-block;
    width: 50%
  }
  .item-box{
    margin-top: 15px;
    padding-left: 10%;
  }
  .name-dsc-span{
    display: inline-block;
    width: 120px;
  }
</style>
