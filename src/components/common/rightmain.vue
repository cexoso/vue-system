<template>
  <div class="rightmain">
    <div class="right-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item v-for="li in breadcrumb" :key="li">{{li.name}}</Breadcrumb-item>
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
export default {
  data () {
    return {
      breadcrumb: [
        { name: '首页' },
        { name: '分类1' },
        { name: '表格' }
      ]
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
  overflow-y: scroll;
  .right-breadcrumb {
    margin-bottom: 10px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: transform .5s
  }
  .fade-enter,
  .fade-leave-active {
    transform: translate3d(0, -100%, 0);
  }
}
</style>
