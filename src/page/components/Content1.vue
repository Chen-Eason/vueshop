<template>
  <div class="content">
    <div class="nav">
      <div class="nav-item" :class="{'bottom-line':current == index}"  v-for="(i, index) in tabs" @click="currentPage(index)">
        <router-link :to="i.url">
          <p :class="{active:current == index}">{{i.text}}</p>
        </router-link>
      </div>       
    </div>
    <router-view class="view" :chanpin="chanpinData" :winHeight="winHeight" :images="images"></router-view>
    <div class="footer">
      <a class="footer-item" href="/vueshop/dist/index.html">
        <img src="@/assets/img/sp01.png" class="footer-icon"></img>
        <p>首页</p>
      </a>
      <a class="footer-item">
        <img src="@/assets/img/sp02.png" class="footer-icon"></img>
        <p>收藏</p>
      </a>
      <a class="footer-item" href="/vueshop/dist/index.html#/gouwuche">
        <img src="@/assets/img/sp03.png" class="footer-icon"></img>
        <p>购物车</p>
      </a>
      <div class="add">
        <button>加入购物车</button>
      </div>
      <div class="buy">
        <button @click="buy">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import qs from 'qs'

export default {
  name: 'Content1',
  data () {
    return {
      param:[
        {param_mc:"",param_zhi:""}
      ],
      currentUrl:"",
      current: 0,
      tabs: [
        {text:"商品", url:"/shangpin"},
        {text:"详情", url:"/xiangxi"},
        {text:"评论", url:"/pinglun"}
        
      ],
      chanpinData:{
        cp_mingcheng: "",
        jiage: "",
        cp_jianjie: "",
        cp_kucun: "",
        xiangou_shuliang: "",
        cp_yixiaoshou: "",
      },
      chanpinDataTest:{"cp_mingcheng" : "自然堂（CHANDO）雪域精粹水乳套装（冰肌水+乳液+雪域三件套）清润型（化妆品套装）", "jiage" : "25", "cp_jianjie" : "补水保湿面膜 亮肤淡斑 晒后修护 男女护肤化妆品套装", "cp_kucun" : "98", "xiangou_shuliang" : "0", "cp_yixiaoshou" : "4"},
      winHeight:0,
      images:[
        {id:0,  src:""},
        {id:1,  src:""},
        {id:2,  src:""}
      ],
      imagesTest:[
        {id:0,  src:"http://www.yaoyiwangluo.com/upload/jingxuan1.jpg"},
        {id:1,  src:"http://www.yaoyiwangluo.com/upload/jingxuan18.jpg"},
        {id:2,  src:"http://www.yaoyiwangluo.com/upload/jingxuan18.jpg"}
      ],
    }
  },
  methods: {
    getParams() {
      var curUrl = window.location.href;
      var urlLength = curUrl.length;
      var offset = curUrl.indexOf("?");
      var canshu = curUrl.substr(offset+1, urlLength);
      var paramArray = canshu.split("&");
      for(var i = 0; i < paramArray.length;i++) {
        var param = paramArray[i].split("=");
        this.param[i].param_mc = param[0];
        this.param[i].param_zhi = param[1];
      }
    },
    getWinHeight() {
      const that = this;
      window.screenHeight = document.documentElement.clientHeight;
      that.winHeight = window.screenHeight - 85;
      window.onresize = () => {
          window.screenHeight = document.documentElement.clientHeight;
          // that.screenWidth = window.screenWidth
          that.winHeight = window.screenHeight - 85;
          console.log("height"+window.screenHeight)
      }
    },
     getChanpinData() {
      var that = this;
      var cpid;
      for(var i = 0; i < that.param.length; i++) {
        if(that.param[i].param_mc == "cpid") {
          cpid = that.param[i].param_zhi;
        }
      }
      axios.post('/api/wx_sp_info-a.asp',
        qs.stringify({cp_id: cpid})
      ).then(res=>{
        that.chanpinData = res.data;
        that.images[0].src = res.data.cp_tupian1;
        that.images[1].src = res.data.cp_tupian2;
        that.images[2].src = res.data.cp_tupian3;
        console.log("request success1");
        console.log("ChanpinData="+ JSON.stringify(res.data));
        console.log("id="+cpid)
      }).catch(error=>{
        that.chanpinData = that.chanpinDataTest;
        that.images = that.imagesTest;
        console.log("request fail1")
      })
    },
    currentPage: function(index) {
      this.current = index;
      console.log("click success")
    },
    getUrl() {
      var curUrl = window.location.href;
      var urlLength = curUrl.length;
      var offset = curUrl.indexOf("?");
      var canshu = curUrl.substr(offset+1, urlLength);
      this.currentUrl = canshu;
    },
    buy() {
      window.location.href = "/vueshop/dist/index.html#/gouwuche"
    }
  },
  mounted(){
    // this.current=this.tabName
    this.getParams();
    this.getWinHeight();
    this.getChanpinData();

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border-top: 1px solid #eee;
  background-color: #fff;
  text-align: center;
  border-bottom: 1px solid #999;
}
.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 30px;
}
.nav-item a{
  text-decoration: none;
  color: #000;
}
.nav-item p{
  margin: 0px;
  font-size: 18px;
}
.item-img {
  width: 40px;
  height: 40px;
}
.active {
  color: #ff5400;
}
.bottom-line {
  border-bottom: 1px solid #ff5400;
}

.footer {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border: 1px solid #eee;
  height: 44px;
  line-height: 44px;
  width: 100%;
  display: flex;
}
.footer-item {
  width: 15%;
  height: 100%;
 text-decoration: none;
}
.footer-icon {
  display: block;
  height: 20px;
  width: 20px;
  position: relative;
  left: 50%;
  margin-left: -10px;
  margin-top: 5px;
}
.footer-item p {
  display: block;
  text-align: center;
  color: #999;
  margin-top: -12px;
  font-size: 12px;
}

.add button {
  background-color: orange;
}
.buy button {
  background-color: orangered;
}
.add button, .buy button {
  font-size: 14px;
  padding: 0 5px;
  color: #fff;
  height: 44px;
  line-height: 44px;
  border: none;
  border-radius: 5px;
  width: 100%;
}
.add, .buy {
  text-align: center;
  flex: 1;
}
</style>
