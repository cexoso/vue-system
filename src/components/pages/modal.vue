<template>
  <div class="modal">
    <div class="demo1">
      <Input v-model="value1">
      <Select v-model="select" slot="prepend" style="width: 80px">
        <Option value="name">姓名</Option>
        <Option value="time">年龄</Option>
      </Select>
      <Button slot="append" icon="ios-search" @click='search'></Button>
      </Input>
    </div>
    <div class="demo2">
      <Button @click="instance('info')">消息</Button>
      <Button type="success" @click="instance('success')">成功</Button>
      <Button type="warning" @click="instance('warning')">警告</Button>
      <Button type="error" @click="instance('error')">错误</Button>
    </div>
    <div class="demo3">
      <Button type="primary" @click="modal1 = true">显示对话框</Button>
      <Modal v-model="modal1" title="普通的Modal对话框标题" @on-ok="ok" @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
      </Modal>
    </div>
    <div class="demo4">
      <p>
        姓名：{{ value }}
      </p>
      <p>
        <Button @click="render">自定义内容</Button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      modal1: false,
      value1: '',
      select: 'name'
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
              placeholder: '输入你需要的内容'
            },
            on: {
              input: (val) => {
                this.value = val
              }
            }
          })
        }
      })
    },
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    },
    instance (type) {
      const title = '对话框的标题'
      const content = '<p>一些对话框内容</p><p>一些对话框内容</p>'
      switch (type) {
        case 'info':
          this.$Modal.info({
            title: title,
            content: content
          })
          break
        case 'success':
          this.$Modal.success({
            title: title,
            content: content
          })
          break
        case 'warning':
          this.$Modal.warning({
            title: title,
            content: content
          })
          break
        case 'error':
          this.$Modal.error({
            title: title,
            content: content
          })
          break
      }
    },
    search () {
      console.log(this.select)
      console.log(this.value1)
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  .demo1,.demo2,.demo3,.demo4{
    margin-bottom: 10px;
  }
}
</style>
