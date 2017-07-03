<template>
  <div class="login wrap">
    <div class="login-card">
      <h2>后台管理系统</h2>
      <form action="">
        <label for="username">
          <input type="text" placeholder="账号">
        </label>
        <label for="password">
          <input type="password" placeholder="密码">
        </label>
        <div class="btn">
          <button>登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

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
      label {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
        margin-bottom: 22px;
        input {
          appearance: none;
          border-radius: 4px;
          border: 1px solid #bfcbd9;
          box-sizing: border-box;
          color: #1f2d3d;
          display: block;
          font-size: inherit;
          height: 36px;
          line-height: 1;
          outline: 0;
          padding: 3px 10px;
          transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
          width: 100%;
        }
      }
      .btn {
        button {
          border: 1px solid #bfcbd9;
          width: 100%;
          height: 36px;
          border-radius: 4px;
          color: #fff;
          background-color: #20a0ff;
          border-color: #20a0ff;
        }
      }
    }
  }
}
</style>
