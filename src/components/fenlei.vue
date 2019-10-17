<template>
  <div class="fenlei" ref="fenlei">
  <div class="left">
    <div v-for="(item,index) in navList" class="fenlei-item" :class="{'selected':curNav == index}">
      <p @click="selectNav(item.id,index)">{{item.name}}</p>
    </div>
  </div>
  <div class="right">
    <Product2 :product2="product"></Product2>
  </div>
</div>
</template>

<script>
import axios from "axios"
import qs from 'qs'
import Product2 from "./Product2"

export default {
  name: 'fenlei',
  // props: 'fenlei',
  components: {
    Product2
  },
  data () {
    return {
      product:[],
      productTest:[{ "cp_id" : 635, "cp_mingcheng" : "自然堂（CHANDO）雪域精粹水乳套装（冰肌水+乳液+雪域三件套）清润型（化妆品套装）", "jiage" : "25", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan18.jpg" } , { "cp_id" : 634, "cp_mingcheng" : "御泥坊 亮颜补水面膜贴21片（补水保湿面膜 亮肤淡斑 晒后修护 男女护肤化妆品套装）", "jiage" : "2", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan17.jpg" } , { "cp_id" : 633, "cp_mingcheng" : "自然堂套装化妆品女雪域精粹系列补水保湿护肤品组合水乳旗舰店 冰肌水（清润型）+乳液【活力冰肌礼盒】", "jiage" : "70", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan16.jpg" } , { "cp_id" : 632, "cp_mingcheng" : "妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g加量装(洗面奶 护肤化妆品)", "jiage" : "80", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan15.jpg" } , { "cp_id" : 631, "cp_mingcheng" : "妮维雅(NIVEA)男士水活冰酷精华露50g（小蓝管 控油乳液面霜 护肤化妆品）", "jiage" : "35", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan14.jpg" } , { "cp_id" : 630, "cp_mingcheng" : "自然堂（CHANDO）雪域精粹水乳套装（冰肌水+乳液+雪域三件套）清润型（化妆品套装）", "jiage" : "25", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan13.jpg" } , { "cp_id" : 629, "cp_mingcheng" : "御泥坊 亮颜补水面膜贴21片（补水保湿面膜 亮肤淡斑 晒后修护 男女护肤化妆品套装）", "jiage" : "15", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan12.jpg" } , { "cp_id" : 628, "cp_mingcheng" : "自然堂套装化妆品女雪域精粹系列补水保湿护肤品组合水乳旗舰店 冰肌水（清润型）+乳液【活力冰肌礼盒】", "jiage" : "20", "cp_tupian" : "http://www.yaoyiwangluo.com/upload/jingxuan11.jpg" }],
      navList:[],
      navListTest:[{ "id" : 387, "name": "基础护理" } , { "id" : 350, "name": "防晒" } , { "id" : 442, "name": "洁面" } , { "id" : 443, "name": "男士" } , { "id" : 444, "name": "面部底妆" } , { "id" : 349, "name": "眼部彩妆" } , { "id" : 348, "name": "其他彩妆" }],
      curNav: 0
    }
  },
  methods:{
    // selectNav(id,index) {
    //   this.curNav = index;
    //   axios.post('/api/wx_fenlei_chanpin.asp',
    //     qs.stringify({int_lxid1: id})
    //   ).then(res=>{
    //     this.product = res.data;
    //     console.log("request success3");
    //     console.log("product="+res);
    //     console.log("id="+id)
    //   }).catch(error=>{
    //     this.product = this.productTest
    //     console.log("request fail3")
    //   })
    // },
    selectNav(id,index) {
      var that = this;
      this.curNav = index;
      this.$jsonp('http://www.yaoyiwangluo.com/wx_fenlei_chanpin.asp',{
        params:{int_lxid1: id}
      }
      ).then(res=>{
        this.product = res.data;
        console.log("request success3");
        console.log("product="+res);
        console.log("id="+id)
      }).catch(error=>{
        this.product = this.productTest
        console.log("request fail3")
      })
      console.log("selectNav:"+this.product)
    },
    getNavList() {
      axios.get('/api/wx_fenlei.asp').then(res=>{
        this.navList = res.data;
        console.log("request success1")
      }).catch(error=>{
        this.navList = this.navListTest
        console.log("request fail1")
      })
    },
    getProuctLists() {
      axios.get('/api/wx_CpList_top4.asp').then(res=>{
        this.product = res.data;
        console.log("request success2")
      }).catch(error=>{
        this.product = this.productTest
        console.log("request fail2")
      })
    },
    getWinHeight() {
      const that = this;
      window.screenHeight = document.documentElement.clientHeight;
      that.$refs.fenlei.style.height = (window.screenHeight - 75) + "px";
      window.onresize = () => {
          window.screenHeight = document.documentElement.clientHeight;
          // that.screenWidth = window.screenWidth
          that.$refs.fenlei.style.height = (window.screenHeight - 75) + "px";
          console.log("height"+window.screenHeight)
      }
    }
  },
  mounted(){
    this.getNavList();
    this.getProuctLists();
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
.fenlei {
  display: flex;
  width: 100%;
  height: 100%;
}
.left { 
  width: 20%;
  /*height: 100%;*/
  background-color: #eee;
  font-size: .85em;
  /*margin-bottom: 75px;*/
  overflow: scroll;
}
.fenlei-item {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
.selected{
  margin-right: -1px;
  padding-left:-1px;
  color: #333;
  background-color: #fff;
}
.right {
  width: 80%;
  /*margin-bottom: 75px;*/
  overflow: scroll;
}
</style>
