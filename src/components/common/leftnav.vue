<template>
  <div class="leftnav">
    <Menu @on-select="isActive" theme="dark" accordion ref="leftMenu" :open-names="open" :active-name="active">
      <Submenu v-for="submenu in leftMenu" :key="submenu.index" :name="submenu.index">
        <template slot="title">
          <Icon :type="submenu.icon"></Icon>
          {{submenu.title}}
        </template>
        <Menu-item v-for="item in submenu.subs" :key="item.index" :name="item.index">{{item.name}}</Menu-item>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'leftMenu',
      'open',
      'active'
    ])
  },
  methods: {
    ...mapActions([
      'isActive'
    ])
  },
  created () {
    this.$store.dispatch('leftMenu')

    this.$nextTick(function () {
      this.$refs.leftMenu.updateOpened()
      this.$refs.leftMenu.updateActiveName()
    })
    this.isActive(this.$store.state.active)
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
