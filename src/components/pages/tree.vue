<template>
  <div class="tree">
    <tree :tree="list"></tree>
  </div>
</template>

<script>
import tree from 'components/common/treegrid'
export default {
  components: {
    tree
  },
  name: 'treelist',
  data () {
    return {
      list: [
        {
          id: '1',
          name: '1',
          type: 'tree',
          expanded: true,
          indent: '1',
          children: [
            {
              id: '1-1',
              name: '1-1',
              type: 'tree',
              expanded: true,
              indent: '2',
              children: [
                {
                  id: '1-1-1',
                  name: '1-1-1',
                  type: 'tree',
                  expanded: true,
                  indent: '3'
                }, {
                  id: '1-1-2',
                  name: '1-1-2',
                  type: 'tree',
                  expanded: true,
                  indent: '3',
                  children: [
                    {
                      id: '1-1-1-1',
                      name: '1-1-1-1',
                      type: 'tree',
                      expanded: true,
                      indent: '4'
                    }
                  ]
                }, {
                  id: '1-1-3',
                  name: '1-1-3',
                  type: 'tree',
                  expanded: true,
                  indent: '3'
                }
              ]
            }, {
              id: '1-2',
              name: '1-2',
              type: 'tree',
              expanded: true,
              indent: '2'
            }
          ]
        }, {
          id: '2',
          name: '2',
          type: 'tree',
          expanded: true,
          indent: '1'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tree {
  border: 1px solid #ccc;
  border-bottom: none;
}
</style>
