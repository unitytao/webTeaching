<template>
  <div>
    <Header />
    <el-container>
      <el-aside width="300px">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
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
              :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            添加子目录
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
            </el-tree>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="create-class-main">
          <p>主要文件</p>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <p>说明</p>
          <textarea rows="10" cols="50">
          </textarea>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from '../../common/Header.vue'
  let id = 1000;
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
    data() {
      const data = [{
        id: 1,
        label: '第一章',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '第二章',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '第三章',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data)),
        filterText: ''
      }
    },
      methods: {
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },

        append(data) {
          let className = '';
          this.$prompt('请输入名称', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({value}) => {
            className = value;
            const newChild = {id: id++, label: className, children: []};
            if (!data.children) {
              this.$set(data, 'children', []);
            }
            data.children.push(newChild);
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
        }
      }
  }
</script>

<style scoped>
.create-class-main{
  text-align: center;
}
</style>

