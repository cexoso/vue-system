<template>
  <div class="user">
    {{user.name}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<style scoped lang="scss">
  .user{}
</style>
