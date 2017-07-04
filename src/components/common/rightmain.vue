<template>
  <div class="rightmain">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'breadcrumb'
    ])
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
  .right-breadcrumb {
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
