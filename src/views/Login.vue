<template>
  <div class="login wrap">
    <div class="login-card">
      <h2>后台管理系统</h2>
      <Form ref="login" inline>
        <Form-item prop="login">
          <Input type="text" v-model="login.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="login.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="logIn(login)">登录</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'login'
    ])
  },
  methods: {
    ...mapActions([
      'logIn'
    ])
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
