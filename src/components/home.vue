<template>
  <div class="home">
    <div class="top-banner">
      <img src="@/assets/tupian/ad01.png">
    </div>
    <Slider :banner="banner"></Slider>
    <div class="menu">
      <a href="" class="menu-item">
        <img src="../assets/img/menu01.png" class="item-img"></img>
        <p class="item-name">品牌大全</p>
      </a>
      <a href="" class="menu-item">
        <img src="../assets/img/menu02.png" class="item-img"></img>
        <p class="item-name">最新上架</p>
      </a>
      <a href="" class="menu-item">
        <img src="../assets/img/menu03.png" class="item-img"></img>
        <p class="item-name">用户中心</p>
      </a>
      <a href="" class="menu-item">
        <img src="../assets/img/menu04.png" class="item-img"></img>
        <p class="item-name">订单列表</p>
      </a>
      <a href="" class="menu-item">
        <img src="../assets/img/menu05.png" class="item-img"></img>
        <p class="item-name">留言反馈</p>
      </a>
      <a href="" class="menu-item">
        <img src="../assets/img/menu06.png" class="item-img"></img>
        <p class="item-name">活动列表</p>
      </a>
      <a href="" class="menu-item">
        <img src="../assets/img/menu07.png" class="item-img"></img>
        <p class="item-name">帮助中心</p>
      </a>
      <a href="" class="menu-item">
        <img src="../assets/img/menu08.png" class="item-img"></img>
        <p class="item-name">关于我们</p>
      </a>
    </div>
    <title1 :title1="title1"></title1>
    <HuoDongList :hdlist="hdlist"></HuoDongList>
    <title1 :title1="'最新上架产品'"></title1>
    <Product1 :product1="product1"></Product1>
    <title1 :title1="'销售排行'"></title1>
    <Product2 :product2="product2"></Product2>
  </div>
</template>

<script>
import axios from 'axios'
import Slider from "./Slider"
import title1 from "./title1"
import HuoDongList from "./HuoDongList"
import Product1 from "./Product1"
import Product2 from "./Product2"

import api from './../axios/api.js'

export default {
  name: 'home',
  components: {
    Slider,
    title1,
    HuoDongList,
    Product1,
    Product2
  },
  data () {
    return {
      banner:[
        {id:1,src:require('../assets/tupian/ban1.jpg')},
        {id:2,src:require('../assets/tupian/ban2.jpg')},
        {id:3,src:require('../assets/tupian/ban3.jpg')}
      ],
      title1:"最新活动",
      hdlist:["11-01 2019年双十一活动","09-29 2019年国庆活动","09-09 2019年中秋活动"],
      product1:[],
      product1test:[ { "cp_id" : 635, "cp_mingcheng" : "自然堂（CHANDO）雪域精粹水乳套装（冰肌水+乳液+雪域三件套）清润型（化妆品套装）", "jiage" : "25", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan18.jpg" } , { "cp_id" : 634, "cp_mingcheng" : "御泥坊 亮颜补水面膜贴21片（补水保湿面膜 亮肤淡斑 晒后修护 男女护肤化妆品套装）", "jiage" : "2", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan17.jpg" } , { "cp_id" : 633, "cp_mingcheng" : "自然堂套装化妆品女雪域精粹系列补水保湿护肤品组合水乳旗舰店 冰肌水（清润型）+乳液【活力冰肌礼盒】", "jiage" : "70", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan16.jpg" } , { "cp_id" : 632, "cp_mingcheng" : "妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g加量装(洗面奶 护肤化妆品)", "jiage" : "80", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan15.jpg" }],
      product2:[]
    }
  },
  methods:{
    setNewsApi: function() {
      api.JH_news('/news/index')
      .then(res => {
        console.log(res);
        // this.newsListShow = res.articles;
        this.product2 = res;
        console.log("request mock fail2")
      });
      console.log("request mock fail1")
    },
    getProuct1Lists() {
      axios.get('http://www.yaoyiwangluo.com/wx_CpList_top4.asp').then(res=>{
        this.product1 = res.data;
        this.product2 = res.data;
        console.log("request data==="+JSON.stringify(res.data));
        console.log("request success1")
      }).catch(error=>{
        this.product1 = this.product1test;
        // this.product2 = this.product1test;
        this.setNewsApi();
        console.log("request fail1")
      })
    },
    // getBanner() {
    //   axios.get('/api/wxshop/100-lunbotupian-link.html').then(res=>{
    //     // this.banner = res
    //     console.log("request success2")
    //   }).catch(
    //     // this.banner = this.product1test
    //     console.log("request fail2")
    //   )
    // }
  },
  mounted(){
    // this.getBanner();
    this.getProuct1Lists();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin-bottom: 75px;
}
.top-banner {
  margin: 1px;
  box-shadow: 0 1px 1px #eee;
  min-height: 28px;
}
.top-banner img{
  width: 100%;
  min-height: 28px;
}

/*菜单*/
.menu {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
}
.menu-item {
  width: 25%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  text-decoration: none;
  color: #000;
}
.item-img {
  width: 66%;
  align-self: center;
}
.item-name {
  font-size: 15px;
  align-self: center;
  margin: 0;
}

</style>
