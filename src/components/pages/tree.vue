<template>
  <table class="treegrid">
    <thead>
      <tr>
        <th>标题</th>
        <th>姓名</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in table" :key="item" v-show="list">
        <td @click="toggletree(index)" :class="'level-' + item.indent">
          <i class="ivu-icon" :class="icon?'ivu-icon-minus':'ivu-icon-plus'" v-if="item.children"></i>
          <i class="ivu-icon ivu-icon-minus" v-else></i>
          <span>{{item.text}}</span>
        </td>
        <td>{{item.name}}</td>
        <td>
          <span>操作</span>
          <span>删除</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'table',
      'icon',
      'list'
    ])
  },
  methods: {
    ...mapActions([
      'toggletree'
    ])
  }
}
</script>

<style scoped lang="scss">
.treegrid {
  width: 100%;
  border: 1px solid #ccc;
  tr {
    border-bottom: 1px solid #ccc;
    th,
    td {
      padding: 4px;
      border-right: 1px solid #ccc;
      &:last-child {
        text-align: center;
      }
    }
  }
  .level-1 {
    position: relative;
    left: 20px;
  }
  .level-2 {
    position: relative;
    left: 40px;
  }
  .level-3 {
    position: relative;
    left: 60px;
  }
  .level-4 {
    position: relative;
    left: 80px;
  }
  .level-5 {
    position: relative;
    left: 100px;
  }
  .level-6 {
    position: relative;
    left: 120px;
  }
}
</style>
