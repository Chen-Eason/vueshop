<template>
  <div class="login1" ref="login1">
    <form v-if="register == false">
      <div class="login">
        <p class="login-title">请输入您的会员账号</p>
        <div class="account">
          <p class="account-text">账号</p>
          <input class="account-info" v-model="log.account"></input>
        </div>
        <div class="pwd">
          <p class="pwd-text">密码</p>
          <input class="pwd-info" v-model="log.mima"></input>
        </div>
        <div>
          <p class="login-tip">请准确填写账号信息，有问题联系客服</p>
          <button class="login-btn" @click="login">登录</button>
          <div class="zhuce-btn nobtn" @click="toReg">注册新用户</div>
        </div>
      </div>
    </form>
    <form @submit.prevent="toLog" v-if="register == true">
      <div class="login">
        <p class="login-title">请输入您的会员账号</p>
        <div class="account">
          <p class="account-text">输入账号</p>
          <input class="account-info" v-model="reg.account"></input>
        </div>
        <div class="pwd">
          <p class="pwd-text">设置密码</p>
          <input class="pwd-info" v-model="reg.mima1"></input>
        </div>
        <div class="pwd">
          <p class="pwd-text">确认密码</p>
          <input class="pwd-info" v-model="reg.mima2"></input>
        </div>
        <div>
          <p class="login-tip">请准确填写账号信息，有问题联系客服</p>
          <div class="login-btn nobtn" @click="toLog">登录已有账号</div>
          <button class="zhuce-btn" @click="registerAndLogin">注册并登录</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import qs from 'qs'

export default {
  name: 'login1',
  props:['login1'],
  data () {
    return {
      register: false,
      log:{},
      reg:{},
      // loginSuccess:false,
      userData:{}
    }
  },
  methods:{
    toReg() {
      this.register = true;
      console.log("register:"+this.register);
    },
    toLog() {
      this.register = false;
      console.log("register:"+this.register);
    },
    login() {
      axios.post('/api1/wx_check_login_yonghu.asp',qs.stringify({
        yhm: this.log.account,
        mm: this.log.mima
      })).then(res=>{
        if (res.data.zt == "yes") {
          window.localStorage.setItem("loginzt", true);
          // this.userData.zt = true;
          this.userData.yhm = this.log.account;
          this.userData.userId = res.data.uid;
          this.getUserData();
        }
        console.log("登录成功:"+res.data.zt);
      }).catch(error=>{
        window.localStorage.setItem("loginzt", true);
        // this.userData.zt = true;
        this.userData.yhm = this.log.account;
        this.getUserData();
        console.log("登录失败");
      })
    },
    //返回zt:状态(yes,no);xinxi:说明;uid:用户id
    registerAndLogin() {
      axios.post('/api1/wx_check_reg_yonghu.asp',qs.stringify({
        yhm: this.reg.account,
        mm: this.reg.mima1
      })).then(res=>{
        if (res.data.zt == "yes") {
          window.localStorage.setItem("loginzt", true);
          // this.userData.zt = true;
          this.userData.yhm = this.reg.account;
          this.userData.userId = res.data.uid;
          this.getUserData();
        }
        console.log("注册成功"+res.data.zt);
      }).catch(error=>{
        window.localStorage.setItem("loginzt", true);
        // this.userData.zt = true;
        this.userData.yhm = this.reg.account;
        this.getUserData();
        console.log("注册失败");
      })
    },
    getUserData() {
      console.log("userData:"+JSON.stringify(this.userData));
      this.$emit("userInfo", this.userData)
    },
    getWinHeight() {
      const that = this;
      window.screenHeight = document.documentElement.clientHeight;
      that.$refs.login1.style.height = (window.screenHeight - 75) + "px";
      window.onresize = () => {
          window.screenHeight = document.documentElement.clientHeight;
          // that.screenWidth = window.screenWidth
          that.$refs.login1.style.height = (window.screenHeight - 75) + "px";
          console.log("height"+window.screenHeight)
      }
    }
  },
  mounted(){
    this.getWinHeight();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  display: block;
  margin: 0;
}
.login1 {
  background-color: #f2f2f2;
}
.login {
  padding: 10px;
}
.login-title {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  color: #999;
  font-size: 14px;
  margin: 20px 0;
  font-size: 18px;
}
.account, .pwd {
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.account-text, .pwd-text {
  width: 80px;
  color: #999;
  font-size: 18px;
}
.account-info, .pwd-info{
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
}
.login-tip {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  color: #999;
  font-size: 14px;
  margin: 10px 0 20px 0;
}
.login-btn, .zhuce-btn {
  margin-bottom: 10px;
  width: 100%;
  background-color: #19b128;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  font-size: 18px;
  outline: none;
}
.nobtn {
  text-align: center;
  box-sizing: border-box;
}
</style>
