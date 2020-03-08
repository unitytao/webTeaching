<template>
  <div class="home-left-nav">
    <ul>
      <li><router-link :to="{path:'/courseClass', query: {id:1}}"><span class="iconfont icon-waiyuxueyuan"></span>&nbsp;&nbsp;外语</router-link></li>
      <li><router-link :to="{path:'/courseClass', query: {id:2}}"><span class="iconfont icon-jisuanjicomputer160"></span>&nbsp;&nbsp;计算机</router-link></li>
      <li><router-link :to="{path:'/courseClass', query: {id:3}}"><span class="iconfont icon-xuexi1"></span>&nbsp;&nbsp;考研</router-link></li>
      <li><router-link :to="{path:'/courseClass', query: {id:4}}"><span class="iconfont icon-experiment"></span>&nbsp;&nbsp;理工补习</router-link></li>
      <li><router-link :to="{path:'/courseClass', query: {id:5}}"><span class="iconfont icon-xuexi"></span>&nbsp;&nbsp;四六级</router-link></li>
      <li><router-link :to="{path:'/courseClass', query: {id:6}}"><span class="iconfont icon-30"></span>&nbsp;&nbsp;考证就业</router-link></li>
      <li><router-link :to="{path:'/courseClass', query: {id:7}}"><span class="iconfont icon-gengduo"></span>&nbsp;&nbsp;更多</router-link></li>

    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .home-left-nav{
    border-radius: 5px;
    background-color: black;
    width: 100%
  }
  ul{
    list-style-type:none;
    margin:0;
    padding:0;
    border-radius: 5px;

  }
  a{
    height: 50px;
    display:inline-block;
    color:white;
    text-decoration:none;
    line-height: 50px;
    text-indent: 2em;
    font-size: 1.2em;
  }

  a:hover,a:active{

    background-color:#98bf21;

  }
</style>

