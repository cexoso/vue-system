<template>
  <div class="login wrap">
    <div class="login-card">
      <h2>后台管理系统</h2>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <Form-item prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="logIn('formInline')">登录</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
import router from './../router/index'
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    logIn (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          sessionStorage.setItem('login', JSON.stringify(this.formInline))
          this.$Message.success('提交成功!')
          router.push('/index')
        } else {
          this.$Message.error('表单验证失败!')
        }
        this.formInline.user = ''
        this.formInline.password = ''
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  background-color: #324157;
  text-align: center;
  top: 0;
  bottom: 0;
  z-index: 1;
  .login-card {
    width: 400px;
    margin: 0 auto;
    margin-top: 16%;
    background: #fff;
    border-radius: 4px;
    h2 {
      padding: 18px 20px;
      border-bottom: 1px solid #d1dbe5;
      box-sizing: border-box;
      font-size: 28px;
      font-weight: normal;
    }
    form {
      padding: 30px 60px;
      .ivu-form-inline,
      .ivu-form-item {
        display: block;
        .ivu-btn-primary {
          width: 100%;
        }
      }
    }
  }
}
</style>
