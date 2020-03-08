<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-button @click="collects()">
          收藏此课程
        </el-button>
        <el-tree
          class="filter-tree"
          :data="data1"
          node-key="id"
          default-expand-all
          ref="tree"
          :expand-on-click-node="false"
          highlight-current
          @node-click ="handleNodeClick"
        >
        </el-tree>
      </el-aside>
      <el-main>
        <div>
          <router-link to="/study/goal">学习目标</router-link>
          <router-link to="/study/main">本节内容</router-link>
          <router-link to="/study/more">学习资料</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import Header from '../../common/Header.vue'
  import {mapState} from 'vuex'
  import {reqCollection} from '../../api/index.js'
    export default {
    components: {
      Header
    },
      data() {
        return {
          data1:[],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        handleNodeClick(data) {
          console.log(data.contentUrl);
          this.$router.push('/study/goal')
          const courseData = this.$store.state.courseData.courseContent
          let arr =[]
          courseData.forEach((item) => {
            arr.push(item.courseUrl)
          })
          console.log(arr)
          const delIndex =arr.indexOf(data.contentUrl)
          const nowClass = courseData[delIndex]
          this.$store.dispatch('cleanClass', nowClass)
        },
        async collects(){
          const cid = this.$store.state.courseData.cid
          const uid =this.$store.state.userInfo.id
          console.log(uid)
          const obj ={
            uid:uid,
            cid:cid
          }
          const result =await reqCollection(obj)
        }

      },
      computed:{
      ...mapState(['courseData'],)
      },
      mounted () {
        this.data1 = this.$store.state.courseData.treeData
        const courseData = this.$store.state.courseData.courseContent
        const nowClass = courseData[0]
        this.$store.dispatch('cleanClass', nowClass)

      }
    }
</script>

<style scoped>

</style>
