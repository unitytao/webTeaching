<template>
  <div>
    <Header />
    <div class="select-item-box" v-for="(item, index) in this.list" :key="index" @click="toStudy(item.url,item.id)">
      <div class="select-item-image">
        <img :src=getImgUrl(item.image) class="select-image"/>
      </div>
      <div class="select-item-data">
        <div>{{item.classname}}</div>
        <div style="padding-top: 20px">{{item.school}}</div>
        <div style="padding-top: 20px">{{item.type}}</div>
        <div style="padding-top: 20px">
          <span>
          <span class="iconfont icon-yonghuming"></span>
          {{item.browse}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../common/Header'
  import {reqSelectCourseByName} from '../../api/index.js'
  import {reqCourseData} from '../../api/index.js'
  export default {
    data(){
      return{
        list:{}
      }
    },
    components:{
      Header
    },
   async mounted () {
      const classname =this.$route.query.selectIndex
      const result =await reqSelectCourseByName({classname:classname})
      if (result.code ===0){
        this.list =result.queryResult.pageInfo.list
      }
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
  .select-item-box{
    width: 928px;
    height: 165px;
    inline-height:164px;
    background-color: rebeccapurple;
  }
  .select-image{
    width: 285px;
    height: 162px;
  }
  .select-item-image{
    width: 287px;
    height: 165px;
    background-color: green;
    display: inline-block;
  }
  .select-item-data{
    width: 635px;
    height: 165px;
    float: right;
    inline-height: 150px;
    background-color: white;
    font-size: 20px;
  }
</style>
