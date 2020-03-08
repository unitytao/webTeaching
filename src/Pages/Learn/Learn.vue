<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <div class="learn-box" v-for="(item, index) in 2" :key="index">
        <div class="cl-all">
          <div class="cl-title">外语</div>
          <div>
            <div class="left-cl-box">
              <div class="left-top-bg">
                <br />
                <span style="margin: 8px; font-size:14px ;display:inline-block">西方思想经典</span>
                <span style="font-size: 24px;margin-top: 10px;margin-left:10px;display: inline-block">idealism 柏拉图的理念论</span>
                <span style="display: inline-block;margin-left: 5px;font-size: 12px">【课时】6'8''</span>
                <br />
                <span class="iconfont icon-bofang" style="display: inline-block;margin-left:88px;margin-top: 50px"></span>
              </div>
              <div class="left-down-text">
                <div>
                  <span style="display: inline-block;font-size:13px;margin-left: 10px;margin-top: 10px">Bacon 培根的认识论</span>
                  <span style="display: inline-block;float: right ;margin-right: 20px;font-size: 13px;color:#999999;margin-top: 10px">6'8''</span>
                </div>
                <div>
                  <span style="display: inline-block;font-size:13px;margin-left: 10px;margin-top: 10px">Descartes 笛卡尔的哲学</span>
                  <span style="display: inline-block;float: right ;margin-right: 20px;font-size: 13px;color:#999999;margin-top: 10px">5'58''</span>
                </div>
                <div>
                  <span style="display: inline-block;font-size:13px;margin-left: 10px;margin-top: 10px">Subjectivism 主观主义</span>
                  <span style="display: inline-block;float: right ;margin-right: 20px;font-size: 13px;color:#999999;margin-top: 10px">7'21''</span>
                </div>
              </div>
            </div>
            <div class="item-box" >
              <div class="cl-item" v-for="(Language, index) in courses.pageInfo.list" :key="index" @click="toStudy(Language.url,Language.id)">
                <div>
                  <img :src=getImgUrl(Language.image) class="cl-img"/>
                  <div class="cl-name"> <span>{{Language.classname}}</span></div>
                  <div class="cl-sch"> <span>{{Language.school}}</span>
                    <div class="cl-per">
                <span>
                <span class="iconfont icon-yonghuming"></span>
                  {{Language.browse}}
              </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import Header from "../../common/Header"
  import {mapState} from 'vuex'
  import {reqCourseData} from '../../api/index.js'

  export default {
    data () {
      return {
      }
    },
    mounted(){
      this.$store.dispatch('getCourses')
    },
    components:{
      Header,
    },
    computed:{
      ...mapState(['courses']),
    },
    methods:{
      async toStudy(a,id){
        const result = await reqCourseData({classUrl:a})
        console.log(a)
        console.log(result.queryResult.pageInfo.list[0])
        const treeData =JSON.parse(result.queryResult.pageInfo.list[0].structure)
        const courseContent =JSON.parse(result.queryResult.pageInfo.list[0].courseData)
        const cid =result.queryResult.pageInfo.list[0].cid
        const obj ={
          treeData:treeData,
          courseContent:courseContent,
          cid:cid
        }
        this.$store.dispatch('recordCourseByUrlData',obj)
        console.log(id)
        this.$router.push('/study')

      },
      getImgUrl(src){
        return require("@/assets/img/" +src)
      }
    }
  }
</script>

<style scoped>
  html{
    margin: 0px;
    padding: 0px;
    height: 100%;
  }
  body{
    width: 100%;
    padding: 0px;
    height: 100%;
  }
.learn-box{
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #d3dce6;
}
  .cl-all{
    width: 1260px;
    height: 521px;
    margin: auto;
  }
  .left-cl-box{
    width: 236px;
    height: 409px;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    display: inline-block;
  }
  .item-box{
    width: 1020px;
    height: 426px;
    float: right;
    display: inline-block;
    overflow: hidden;
  }
  .left-top-bg{
    position: relative;
    background-color: lightblue;
    width: 236px;
    height: 323px;
    margin: 0px;
    padding: 0px;
    color: white;
  }
  .left-down-text{
    position: relative;
    width: 236px;
    height: 86px;
    display: inline-block;
    background-color: white;
    border: 1px black;
  }
  .cl-title{
    width: 48px;
    height: 31px;
    line-height: 31px;
    display: inline-block;
    font-size: 24px;
    text-align: left;
  }
  .cl-item{
    width: 236px;
    height: 200px;
    position: relative;
    float: left;
    background-color: white;
    margin-left: 16px;
    margin-top: 10px;
  }
  .cl-img{
    width: 236px;
    height: 148px;
  }
  .cl-name{
    display: inline-block;
    text-align: left;
    width: 100%;
    height: 22px;
    font-size: 14px;
    color: black;
  }
  .cl-sch{
    display: inline-block;
    width: 100%;
    height: 17px;
    font-size: 12px;
    color: rgb(153, 153, 153);
    text-align: left;
  }
  .cl-per{
    display: inline-block;
    position: relative;
    float: right;
    margin-right: 5px;
  }
  /deep/.el-main{
    display: block;
    padding: 0px;
    margin: 0px;
  }
  /deep/.el-header{
    padding: 0px;
    margin: 0px;
  }
</style>

