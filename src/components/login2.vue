<template>
  <div class="login2">
    <div class="toubu">
      <div class="toubu-zuo">
        <img src="../assets/img/wx.png" class="toubu-zuo-touxiang">
      </div>
      <div class="toubu-you">
        <div class="toubu-you-txt1">
          Eason
        </div>
        <div class="toubu-you-txt2">等级：普通会员</div>
        <div class="toubu-you-txt3">手机：【绑定手机号码】</div>
      </div>
    </div>
    <div>
      <div class="caidan">
        <img class="caidan-icon" src="../assets/img/sys01.png"></img>
        <p class="caidan-text">我的订单</p>
        <img class="caidan-arrow" src="../assets/img/right.png"></img>
      </div>
      <div class="caidan">
        <img class="caidan-icon" src="../assets/img/sys02.png"></img>
        <p class="caidan-text">收货地址</p>
        <img class="caidan-arrow" src="../assets/img/right.png"></img>
      </div>
      <div class="caidan">
        <img class="caidan-icon" src="../assets/img/sys03.png"></img>
        <p class="caidan-text">我的收藏</p>
        <img class="caidan-arrow" src="../assets/img/right.png"></img>
      </div>
      <div class="caidan" @click="tuichu">
        <img class="caidan-icon" src="../assets/img/sys04.png"></img>
        <p class="caidan-text">退出登录</p>
        <img class="caidan-arrow" src="../assets/img/right.png"></img>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'title1',
  props:['title1'],
  data () {
    return {
      userData:{},
      list:[ 
        {text:"我的订单", img: require("../assets/img/sys01.png")},
        {text:"收货地址", img: require("../assets/img/sys02.png")},
        {text:"我的收藏", img: require("../assets/img/sys03.png")},
        {text:"退出登录", img: require("../assets/img/sys04.png")}
      ]
    }
  },
  methods: {
    tuichu() {
      window.localStorage.clear();
      window.localStorage.setItem('loginzt', false);
      // this.userData.zt = false;
      this.$emit("userInfo", this.userData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  display: block;
  margin: 0;
}
/*头部信息*/
.toubu {
  display: flex;
  margin: 1px;
  padding: 10px;
  background-color: crimson;
  align-items: center;
}
.toubu-zuo {}
.toubu-zuo-touxiang {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 3px 3px 10px gainsboro;
  display: block;
  overflow: hidden;
  background-color: #fff;
}
.toubu-you {
  padding-left: 20px;
}
.toubu-you-txt1 {
  color: white;
}
.toubu-you-txt2 {
  /*background-color: darkorange;*/
  color: white;
  margin: 6px 0 10px 0px;
}
.toubu-you-txt3 {
  color: white;
}


.caidan{
  display: flex;
  padding: 10px; 
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  margin-top: 10px;
  text-decoration: none;
  color: #000;
}
.caidan-icon{
  width: 20px; height: 20px;
}
.caidan-text{
  flex-grow: 1;
  margin-left: 10px;
}
.caidan-arrow{
  width: 16px; height: 16px;
}

</style>
