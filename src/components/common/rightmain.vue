<template>
  <div class="rightmain">
    <div class="right-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
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

}
</script>

<style scoped lang="scss">
.rightmain {
  width: 78%;
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
