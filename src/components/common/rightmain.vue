<template>
  <div class="rightmain">
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
      <Tab-pane label="标签一" v-if="tab0">
        <div class="right-breadcrumb">
          <Breadcrumb v-if="breadcrumb">
            <Breadcrumb-item>首页</Breadcrumb-item>
            <Breadcrumb-item v-for="li in breadcrumb" :key="li">{{li}}</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <transition name="fold">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </Tab-pane>
    </Tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'breadcrumb'
    ])
  },
  data () {
    return {
      tab0: true
    }
  },
  methods: {
    handleTabRemove () {

    }
  }
}
</script>

<style scoped lang="scss">
.rightmain {
  width: 80%;
  margin-left: 20%;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1%;
  overflow-y: auto;
  .ivu-breadcrumb {
    margin-bottom: 10px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
}
</style>
