<template>
    <div class="file-box-main">
      <div style="display: inline-block;width: 100%">
        <el-button>添加所有</el-button>
        <el-select v-model="value" placeholder="排序方式">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>总计{{file.total}}个文件</span>
      </div>

      <ul>
        <li>
          <el-checkbox v-for="(item, index) in file.list" :key="index">
          <div class="icon-file"><span :class="item.iconType"></span></div>
          <div class="file-name">{{item.fileName}}</div>
          <div class="file-type">{{item.course}}</div>
            <div class="file-type">{{item.fileDsc}}</div>
          <div class="create-time">{{item.uploadTimeStr}}</div>
            <div class="download-num">{{item.downloadNum}}</div>
            <div class="download-button"><el-button @click="addCourse(item.id)">添加到个人资源库</el-button></div>
            <div class="review-button"><a :href='"api/FileDto/download?path=C:/Users/WI/Desktop/webTeaching-master/src/assets/vedio/"+item.url' >下载</a></div>
          </el-checkbox>
        </li>
      </ul>
      <div style="text-align: center">
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      data (){
        return{
          options: [{
            value: '选项1',
            label: '按人气排序'
          }, {
            value: '选项2',
            label: '按时间排序'
          },
          ],
          value: '按人气排序',
        }
        },
      computed:{
        ...mapState(['file'])
      },
      methods:{
        addCourse(id){
          console.log(id)
        }
      }
     }
</script>

<style scoped>
  ul,li{
    padding:0;
    margin:0;
    list-style:none;
    text-align: left;
  }
.file-box-main{
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
  height: 500px;
  display: inline-block;
}
  .icon-file{
    display: inline-block;
    width: 20px;
  }
  .file-name {
    display: inline-block;
    width: 200px;
    text-align: left;
  }
  .create-time{
    display: inline-block;
    width: 200px;
  }
  .file-type{
    display: inline-block;
    width: 200px;
  }
  .review-button{
    display: inline-block;
    width: 56px;
    float: right;
    margin-left: 10px;
  }
  .download-button{
    margin-left: 10px;
    display: inline-block;
    width: 56px;
    float: right;
  }
  .download-num{
    text-align: center;
    display: inline-block;
    width: 200px;
  }
</style>
