<template>
  <div>
  <div class="item-box" >
    <div class="cl-item" v-for="(Language, index) in dataList" :key="index" @click="toStudy(Language.url,Language.id)">
      <div>
        <img :src=getImgUrl(Language.image) class="cl-img"/>
        <div class="cl-name"> <span>{{Language.classname}}</span><div class="cl-button"><button @click.stop="removeCourse(Language.id)">移除</button></div></div>
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
</template>

<script>
  import {reqMyCollection} from '../../api/index.js'
  import {reqCourseData,reqRemoveMyCollection} from '../../api/index.js'
    export default {
    data(){
      return{
        dataList:{

        }
      }
    },
       async mounted () {
        const uid =this.$store.state.userInfo.id
        const result =await reqMyCollection({uid:uid})
         console.log(result.queryResult.pageInfo.list)
         this.dataList =result.queryResult.pageInfo.list
         console.log(this.dataList)
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
        async removeCourse(id){
          const cid =id
          const uid =this.$store.state.userInfo.id
          const obj ={
            uid:uid,
            cid:cid
          }
          console.log(obj)
          const result =await reqRemoveMyCollection(obj)
          if (result.code ===0){
            const msg =result.message
            history.go(0)
            this.$message(msg)
          }
        },
        getImgUrl(src){
          return require("@/assets/img/" +src)
        }
      }
    }
</script>

<style scoped>
  .item-box{
    width: 1032px;
    height: 426px;
    float: left;
    margin-top: 30px;
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
  .cl-button{
    display: inline-block;
    float: right;
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
</style>
