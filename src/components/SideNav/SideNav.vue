<template>
<div class="left-nav-box">
  <ul>
    <li @click="changeIndex(0)"><router-link :to="{path:'/courseWare'}"><span class="iconfont icon-waiyuxueyuan"></span>&nbsp;&nbsp;外语</router-link></li>
    <li @click="changeIndex(1)"><router-link :to="{path:'/courseWare'}"><span class="iconfont icon-jisuanjicomputer160"></span>&nbsp;&nbsp;计算机</router-link></li>
    <li @click="changeIndex(2)"><router-link :to="{path:'/courseWare'}"><span class="iconfont icon-xuexi1"></span>&nbsp;&nbsp;考研</router-link></li>
    <li @click="changeIndex(3)"><router-link :to="{path:'/courseWare'}"><span class="iconfont icon-experiment"></span>&nbsp;&nbsp;理工补习</router-link></li>
    <li @click="changeIndex(4)"><router-link :to="{path:'/courseWare'}"><span class="iconfont icon-xuexi"></span>&nbsp;&nbsp;四六级</router-link></li>
    <li @click="changeIndex(5)"><router-link :to="{path:'/courseWare'}"><span class="iconfont icon-30"></span>&nbsp;&nbsp;考证就业</router-link></li>
    <li @click="changeIndex(6)"><router-link :to="{path:'/courseWare'}"><span class="iconfont icon-gengduo"></span>&nbsp;&nbsp;更多</router-link></li>

  </ul>
</div>
</template>

<script>
    export default {
      data (){
        return{
          sideIndex:['外语','计算机与科学','考研','理工补习','四六级','考证就业'],
          keyword:'',
          type:'',
          timeStatus: ''
        }
      },
      methods:{
        changeIndex(i){
          const type =''
          const course =this.sideIndex[i]
          const keyword = this.keyword
          const timeStatus =this.timeStatus
          this.$store.dispatch('recordFileData',{keyword,type,timeStatus,course})
        }
      }
    }
</script>

<style scoped>
  .left-nav-box{
    border-radius: 5px;
    background-color: #545c64;
    margin-top: 50px;
  }
  ul{
    list-style-type:none;
    margin:0;
    padding:0;
    border-radius: 5px;

  }
  a{
    width: 210px;
    height: 50px;
    display:inline-block;
    color:white;
    text-decoration:none;
    line-height: 50px;
    text-indent: 2em;
  }

  a:hover,a:active{

    background-color:#98bf21;

  }
</style>
