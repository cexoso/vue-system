<template>
  <div class="topnav">
    <router-link v-for="link in routernav" :key="link" :to="link.to">{{link.name}}</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'routernav'
    ])
  }
}
</script>

<style scoped lang="scss">
.topnav {
  width: 100%;
  text-align: center;
  background-color: #eef1f6;
  font-size: 0;
  a {
    font-size: 14px;
    margin: 0 10px;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    color: #48576a;
  }
  .router-link-active,
  .router-link-exact-active{
    color: #20A0FF;
  }
}
</style>
