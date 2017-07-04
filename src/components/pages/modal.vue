<template>
  <div>
    <p>
      姓名：{{ value }}
    </p>
    <p>
      <Button @click="render">自定义内容</Button>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    render () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: 'Please enter your name...'
            },
            on: {
              input: (val) => {
                this.value = val
              }
            }
          })
        }
      })
    }
  }
}
</script>
