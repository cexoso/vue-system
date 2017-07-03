<template>
  <div class="index wrap">
    <left-nav></left-nav>
    <right-main></right-main>
  </div>
</template>

<script>
import leftNav from 'components/common/leftnav'
import rightMain from 'components/common/rightmain'
export default {
  components: {
    leftNav,
    rightMain
  }
}
</script>

<style scoped lang="scss">
.index {}
</style>
