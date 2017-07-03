<template>
  <div class="topnav">
    <router-link to="/index">首页</router-link>
    <router-link to="/notfound">404</router-link>
  </div>
</template>

<script>
export default {

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
