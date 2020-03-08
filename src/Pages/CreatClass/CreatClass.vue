<template>
  <div>
    <Header />
    <el-container>
      <el-aside width="300px">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <div style="display: inline-block;;margin-top: 10px"><el-button @click="()=>append(data)">添加新章节</el-button></div>
        <div style="display: inline-block;margin-top: 10px"><el-button @click="() => SaveCourse()">保存选中小结</el-button></div>
        <div style="display: inline-block;margin-top: 10px"><el-button @click="() => sendCourse(data)">提交此课程</el-button></div>
        <div style="display: inline-block">
        </div>
        <br />
        <div class="custom-tree-container">
          <div class="block">
            <el-tree
              class="filter-tree"
              :data="data"
              show-checkbox
              node-key="id"
              default-expand-all
              :filter-node-method="filterNode"
              ref="tree"
              :expand-on-click-node="false"
              highlight-current
              @node-click ="handleCheck"
            >
      <span class="custom-tree-node" slot-scope="{ node, data }" >
        <span>{{ node.label }}</span>
        <span>
          <div v-if="data.addAble" style="display: inline-block">
          <el-button
            type="text"
            size="mini"
            @click="() => addNewChild(data)">
            添加子目录
            </el-button>
          </div>
          <div v-if="data.delAble" style="display: inline-block">
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
          </div>
          <div style="display: inline-block">
            <el-button
              type="text"
              size="mini"
              @click="() => changeName(data)">
            更改名称
          </el-button>
          </div>
        </span>
      </span>
            </el-tree>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div v-if="!isNull">
          <div style="display: inline-block">
            <ul>
              <li>
                <router-link to="/creatClass/goal" v-if="isRouterAlive">学习目标</router-link>
              </li>
              <li>
                <router-link to="/creatClass/main">学习视频</router-link>
              </li>
              <li>
                <router-link to="/creatClass/more">其他内容</router-link>
              </li>
            </ul>
          </div>
          <div style="display: inline-block;width: 100%;height: 100%">
            <router-view></router-view>
          </div>
        </div>
        <div v-else>请先添加章节</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {reqCourseAll,reqSendData} from "../../api";
  import {getUID} from '../../api/fun.js'
  import {mapState} from 'vuex'
  import Header from '../../common/Header.vue'
  let id = 1;
  export default {
    //监听过滤器的值得变化
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    components: {
      Header
    },
    computed:{
      ...mapState(['userInfo','class'])
    },
    data() {
      const data = [];
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data)),
        filterText: '',
        isNull:true,
        isRouterAlive:true,
        cid:0
      }
    },
      methods: {
        handleCheck(data){
          this.$store.dispatch('recordClassURL',data.contentUrl)
          console.log(data.contentUrl)
          let arr =[]
          const obj =this.$store.state.coursesContent
            for(const i in obj){
              arr.push(obj[i].courseUrl)
            }
            if(arr.indexOf(data.contentUrl)!== -1){
              const nowIndex =parseInt(arr.indexOf(data.contentUrl))
              console.log(obj[nowIndex])
              this.$store.dispatch('recordNowData',obj[nowIndex])
              console.log(this.$store.state.nowData)
            }else{
              const nowData ={
                courseUrl:null,
                classMain: null,
                classMore: [],
                classGoal: null,
              }
              this.$store.dispatch('recordNowData',nowData)
            }
              this.$router.push('/creatClass/loading')
        },
        SaveCourse(){
          let res = this.$refs.tree.getCheckedNodes()
          let arr = []
          res.forEach((item) => {
            arr.push(item.contentUrl)
          })
          var end = arr.pop()
          const allURL = this.$store.state.coursesContent
          let obj=[]
          for(const i in allURL){
            obj.push(allURL[i].courseUrl)
          }
          if(obj.indexOf(end) !== -1){
            const delIndex =parseInt(obj.indexOf(end))
            this.$store.dispatch('spliceData',delIndex)
            this.$store.dispatch('recordClassURL',end)
            const all =this.$store.state.class
            this.$store.dispatch('recordClassAll', all)
            const newClass ={
              courseUrl:null,
              classMain: null,
              classMore: [],
              classGoal: null,
            }
            this.$store.dispatch('cleanClass', newClass)
          }else {
            this.$store.dispatch('recordClassURL',end)
            const all =this.$store.state.class
            this.$store.dispatch('recordClassAll', all)
            const newClass ={
              courseUrl:null,
              classMain: null,
              classMore: [],
              classGoal: null,
            }
            this.$store.dispatch('cleanClass', newClass)
            this.$message('保存成功')
          }
        },
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },

        addNewChild(data) {
          let className = '';
          const uuid = getUID()
          this.$prompt('请输入名称', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({value}) => {
            className = value;
            const newChild = {id: id++, label: className, children: [],addAble: false, delAble: true,contentUrl:uuid};
            this.$store.dispatch('recordClassURL',uuid)
            data.children.push(newChild);
            this.$router.push('/creatClass/goal')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          })
        },

        append(data){
          let className = '';
          const uuid = getUID()
          this.$prompt('请输入名称', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({value}) => {
            className = value;
            data.push({id: id++, label: className,children:[
                {id: id++, label: '第一节', children: [],addAble: false, delAble: true,contentUrl:uuid}
              ],addAble: true,
              delAble: true,contentUrl:uuid});
            this.$store.dispatch('recordClassURL',uuid)
            this.isNull =false
            this.$router.push('/creatClass/goal')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          })
        },

        changeName(data){
          this.$prompt('请输入名称', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({value}) => {
            data.label = value
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          })
        },

        remove(node, data) {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        },

        async sendCourse(data){
          const classIndex =JSON.stringify(data)
          const courseData =JSON.stringify(this.$store.state.coursesContent)
          const ClassUrl=  this.$store.state.nowClass
          const cid =this.cid
          const result = await  reqCourseAll({
            classUrl:ClassUrl,
            structure:classIndex,
            courseData:courseData,
            cid: cid
          })
          if(result.code ===0){
            const msg =result.message
            this.$message(msg)
        /*    this.$router.push('/home')*/
          }else {
            const msg = result.message
            this.$message(msg)
          }
        },
      },
    mounted () {
      this.cid =this.$route.query.cid
    }
  }
</script>

<style scoped>
  ul,li{
    list-style: none;
    display: inline-block;
  }
  a {
    text-decoration: none;
  }
  .warpper .el-tree--highlight-current /deep/ .el-tree-node.is-checked > .el-tree-node__content {
    background-color: rgb(255, 255, 255);
    color:rgb(64, 158, 255);
    }
  .warpper .el-tree--highlight-current /deep/ .el-tree-node.is-current > .el-tree-node__content {
    background-color: rgb(255, 255, 255);
    color:rgb(64, 158, 255);
  }
</style>

