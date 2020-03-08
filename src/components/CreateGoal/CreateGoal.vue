<template>
  <div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textGoal">
    </el-input>
    <el-button @click="recordGoal()">保存</el-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      data() {
        return {
          textGoal:''
        }
      },
      computed:{
        ...mapState(['coursesContent']),
      },
      methods:{
        reload(){
          this.textGoal =this.$store.state.nowData.classGoal
        },
        recordGoal(textarea){
          const text =this.textGoal
          this.$store.dispatch('recordClassGoal',text)
          this.$message('保存成功')
        }
      },
      mounted () {
        this.textGoal  =this.$store.state.nowData.classGoal
      },
      watch:{
        "$router": "reload()"
      }
    }
</script>

<style scoped>

</style>
