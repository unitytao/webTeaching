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
        <span>总计12个文件</span>
      </div>

      <ul>
        <li>
          <el-checkbox>
          <div class="icon-file"><span class="iconfont icon-shipin"></span></div>
          <div class="file-name">数据结构</div>
          <div class="file-type">文件类型</div>
            <div class="file-type">文件简介</div>
          <div class="create-time">2019-2-1</div>
            <div class="create-time">下载人数</div>
            <div class="download-button"><el-button>添加到个人资源库</el-button></div>
            <div class="review-button"><el-button>预览</el-button></div>
          </el-checkbox>
        </li>
        <li>
          <el-checkbox>
            <div class="icon-file"><span class="iconfont icon-pdf"></span></div>
            <div class="file-name">数据结构</div>
            <div class="file-type">文件类型</div>
            <div class="file-type">文件简介</div>
            <div class="create-time">2019-2-1</div>
            <div class="create-time">下载人数</div>
            <div class="download-button"><el-button>添加到个人资源库</el-button></div>
            <div class="review-button"><el-button>预览</el-button></div>
          </el-checkbox>
        </li>
        <li>
          <el-checkbox>
            <div class="icon-file"><span class="iconfont icon-flash"></span></div>
            <div class="file-name">数据结构</div>
            <div class="file-type">文件类型</div>
            <div class="file-type">文件简介</div>
            <div class="create-time">2019-2-1</div>
            <div class="create-time">下载人数</div>
            <div class="download-button"><el-button>添加到个人资源库</el-button></div>
            <div class="review-button"><el-button>预览</el-button></div>
          </el-checkbox>
        </li>
        <li>
          <el-checkbox>
            <div class="icon-file"><span class="iconfont icon-ppt"></span></div>
            <div class="file-name">数据结构</div>
            <div class="file-type">文件类型</div>
            <div class="file-type">文件简介</div>
            <div class="create-time">2019-2-1</div>
            <div class="create-time">下载人数</div>
            <div class="download-button"><el-button>添加到个人资源库</el-button></div>
            <div class="review-button"><el-button>预览</el-button></div>
          </el-checkbox>
        </li>
        <li>
          <el-checkbox>
            <div class="icon-file"><span class="iconfont icon-word"></span></div>
            <div class="file-name">数据结构</div>
            <div class="file-type">文件类型</div>
            <div class="file-type">文件简介</div>
            <div class="create-time">2019-2-1</div>
            <div class="create-time">下载人数</div>
            <div class="download-button"><el-button>添加到个人资源库</el-button></div>
            <div class="review-button"><el-button>预览</el-button></div>
          </el-checkbox>
        </li>
        <li>
          <el-checkbox>
            <div class="icon-file"><span class="iconfont icon-yasuobao"></span></div>
            <div class="file-name">数据结构</div>
            <div class="file-type">文件类型</div>
            <div class="file-type">文件简介</div>
            <div class="create-time">2019-2-1</div>
            <div class="create-time">下载人数</div>
            <div class="download-button"><el-button>添加到个人资源库</el-button></div>
            <div class="review-button"><el-button>预览</el-button></div>
          </el-checkbox>
        </li>
      </ul>
    </div>
</template>

<script>
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
          value: '按人气排序'
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
</style>
