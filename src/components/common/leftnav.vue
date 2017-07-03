<template>
  <div class="leftnav">
    <Menu :theme="theme">
      <Submenu v-for="submenu in leftMenu" :key="submenu" :name="submenu.index">
        <template slot="title">
          <Icon :type="submenu.icon"></Icon>
          {{submenu.title}}
        </template>
        <Menu-item v-for="item in submenu.subs" :key="item" :name="item.index">{{item.name}}</Menu-item>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: 'dark',
      leftMenu: [
        {
          index: 1,
          icon: 'ios-paper',
          title: '内容管理',
          subs: [
            {
              index: '1-1',
              name: '文章管理'
            }, {
              index: '1-2',
              name: '评论管理'
            }, {
              index: '1-3',
              name: '举报管理'
            }
          ]
        }, {
          index: 2,
          icon: 'ios-people',
          title: '用户管理',
          subs: [
            {
              index: '2-1',
              name: '新增用户'
            }, {
              index: '2-2',
              name: '活跃用户'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.leftnav {
  background-color: #495060;
  color: #bfcbd9;
  float: left;
  height: 100%;
}
</style>
