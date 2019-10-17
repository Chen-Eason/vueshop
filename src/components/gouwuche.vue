<template>
  <div class="hello">
    <div class="gwc" v-for="(item,index) in list">
      <div class="gwc-item">
        <div class="gwc-img">
          <!-- <img src="../assets/tupian/cp01.jpg"></img> -->
          <img :src="item.cp_tupian"></img>
        </div>
        <div class="gwc-xinxi">
          <!-- <p class="gwc-name">珀莱雅水动力护肤品套装珀莱雅水动力护肤品套装</p> -->
          <p class="gwc-name">{{item.cp_mingcheng}}</p>
          <div class="gwc-num2">月售：11 件 / 库存：121件</div>
          <div class="gwc-num">
            <!-- <p class="gwc-num1">NO.{{index+1}} </p>
            <p class="gwc-num2"> | 456人付款 | </p> -->
            <p class="gwc-num3"> ￥</p>
            <p class="gwc-num4"> {{item.jiage}}</p>
          </div>
        </div>
        <div class="gwc-shuliang">
          <div class="gwc-jia" @click="jian(index)">-</div>
          <div class="gwc-shu">{{item.shumu}}</div>
          <div class="gwc-jian" @click="jia(index)">+</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="jiesuan">
        <div class="icon-bg">
          <img src="../assets/img/sp02.png" class="jiesuan-icon"></img>
        </div>
        <div class="jiesuan-money">￥ {{zongjine}}</div>
      </div>
      <div class="jiesuan-btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gouwuche',
  data () {
    return {
      zongjine:0,
      list:[
        {jiage:50,shumu:0, cp_mingcheng:"自然堂（CHANDO）雪域精粹水乳套装（冰肌水+乳液+雪域三件套）清润型（化妆品套装）", cp_tupian:"https://www.yaoyiwangluo.com/upload/jingxuan18.jpg"},
        {jiage:150,shumu:0, cp_mingcheng:"御泥坊 亮颜补水面膜贴21片（补水保湿面膜 亮肤淡斑 晒后修护 男女护肤化妆品套装）", cp_tupian:"https://www.yaoyiwangluo.com/upload/jingxuan17.jpg"},
        {jiage:100,shumu:0, cp_mingcheng:"自然堂套装化妆品女雪域精粹系列补水保湿护肤品组合水乳旗舰店 冰肌水（清润型）+乳液【活力冰肌礼盒】", cp_tupian:"https://www.yaoyiwangluo.com/upload/jingxuan16.jpg"},
        {jiage:200,shumu:0, cp_mingcheng:"妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g加量装(洗面奶 护肤化妆品)", cp_tupian:"https://www.yaoyiwangluo.com/upload/jingxuan15.jpg"}
      ]
    }
  },
  methods: {
    jian(index) {
      var that = this;
      if(that.list[index].shumu > 0) {
        that.list[index].shumu = that.list[index].shumu - 1;
        that.zongjine = that.zongjine - that.list[index].jiage
      }
      
    },
    jia(index) {
      var that = this;
      that.list[index].shumu = that.list[index].shumu + 1;
      that.zongjine = that.zongjine + that.list[index].jiage
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
.gwc {

}
.gwc-item {
  display: flex;
  /* width: 100%; */
  padding: 5px;
  border-bottom: 1px dotted #eee;
}
.gwc-img {
  width: 25%;
}
.gwc-img img{
  width: 100%;
  /* padding: 10rpx; */
   border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 1px #ccc;
}
.gwc-xinxi {
  width: 50%;
  padding: 5px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
.gwc-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* font-weight: bold; */
}
.gwc-jianjie {
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
}
.gwc-num {
  display: flex;
  align-items: center;
}
.gwc-num1 {
  color: lawngreen;
}
.gwc-num2 {
  color: #666;
  font-size: 15px;
  margin: 5px 0;

}
.gwc-num3 {
  font-size: 15px;
  color: orangered;
}
.gwc-num4 {
  color: orangered;
}

.gwc-shuliang {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.gwc-jia, .gwc-jian {
  border: 1px solid #666;
  border-radius: 50%;
  padding: 3px;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
}
.gwc-shu {
  padding: 5px;
}
.gwc-jian {
  background-color: orangered;
  color: #fff;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 75px;
  background-color: #f2f2f2;
  width: 100%;
  height: 40px;
}
.jiesuan {
  width: 70%;
  display: flex;
  align-items: center;
  position: relative;
  margin: 5px;
  padding: 5px;
}
.icon-bg {
  position: absolute;
  background-color: antiquewhite;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
  height: 40px;
  width: 40px;
  left: 10px;
  top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.jiesuan-icon {
  width: 30px;
  height: 30px;
}
.jiesuan-money {
  flex: 1;
  color: orange;
  text-align: center;
}
.jiesuan-btn {
  width: 30%;
  height: 40px;
  line-height: 40px;
  background-color: orangered;
  text-align: center;
  color: #fff;
}
</style>
