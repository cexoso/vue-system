<template>
  <div class="leftnav">
    <Menu :theme="theme" @on-select="isActive">
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  computed: {
    ...mapGetters([
      'leftMenu'
    ])
  },
  methods: {
    ...mapActions([
      'isActive'
    ])
  },
  created () {
    this.$store.dispatch('leftMenu')
  }
}
</script>

<style scoped lang="scss">
.leftnav {
  background-color: #495060;
  color: #bfcbd9;
  float: left;
  height: 100%;
  width: 20%;
  overflow-y: auto;
  .ivu-menu {
    width: 100%!important;
  }
}
</style>
