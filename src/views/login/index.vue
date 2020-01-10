<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="0px"
      class="loginForm"
    >
      <h1 class="loginTitle">后台系统</h1>
      <el-form-item prop="name">
        <el-input
          type="text"
          v-model="ruleForm.name"
          placeholder="请输入账号"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          placeholder="请输入密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="loginRem">
        <el-checkbox
          label="记住密码 (账号/密码:admin/admin或editor/editor)"
          v-model="remember"
        ></el-checkbox>
      </div>
      <div class="loginRem" style="font-size: 0.3rem; margin-top:-15px">
        注: 两个账号对应不同的路由权限
      </div>
      <el-form-item>
        <el-button
          class="loginButton"
          type="primary"
          @click="submitForm('ruleForm')"
          :loading="logining"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import axios from 'axios'
    import userAPI from '@/api/http/userAPI'
export default {
  name: "login",
  data() {
    return {
      logining: false,
      ruleForm: {
        name: "admin",
        pass: "admin"
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      remember: true
    };
  },

  methods: {
    submitForm(formName) {
      console.log("aaaaaaaaaaaaa"+formName);
      this.requestData ();
    },
    requestData () {
        let param = {username: 'tom',password:'123456'}
        userAPI.login(
            param,
            function (data) {
                console.log(data)
                this.$router.push("/")
            },
            function (data) {
                console.log(data)
            }
        )

        /*axios.post('/user/login').then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })*/
    }


  }

}
</script>

<style scoped lang="less">
  .login {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-weight: bold;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-image: url('../../../public/img/background.jpeg');
    background-size: 100% 100%;
    &Form {
      -webkit-border-radius: 20px;
      border-radius: 20px;
      -moz-border-radius: 20px;
      background-clip: padding-box;
      margin: 180px auto;
      width: 350px;
      padding: 35px 50px 20px 50px;
      background-image: linear-gradient(to right, rgba(	245,245,220,0.9), rgba(255,255,224,0.85));
      border: 1px solid #eaeaea;
      // box-shadow: 0 0 5px #AFEEEE;
    }
    &Title {
      margin: 0 0 20px 0;
      text-align: center;
      font-size: 1.8rem;
    }
    &Button {
      width: 50%;
    }
    &Rem {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      margin-bottom: 20px;
      // border: 1px solid red
    }
  }

</style>
