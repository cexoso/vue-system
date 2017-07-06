<template>
    <div class="treegrid">
      <Tree :data="baseData" show-checkbox></Tree>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          baseData: [{
            expand: true,
            title: '父类 1',
            children: [{
              title: '父类 1-0',
              expand: true,
              children: [{
                title: '子类'
              }, {
                title: '子类'
              }]
            }, {
              title: '父类 1-1',
              expand: true,
              children: [{
                title: '子类'
              }]
            }]
          }]
        }
      }
    }
</script>
