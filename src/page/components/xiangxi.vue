<template>
  <div class="shangpin" :style="'height:'+ winHeight + 'px'">
    <div class="chanpin">
      <!-- <swiper indicator-dots="{{indicatorDots}}" vertical="{{vertical}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}" style="height:250px">
        <block wx:for="{{images}}" wx:key="*this">
          <swiper-item>
            <image src="{{item}}" class="slide-chanpin"></image>
          </swiper-item>
        </block>
      </swiper> -->
      <Slider1 v-if="images != null" :banner="images"></Slider1>
      <Slider1 v-else :banner="banner"></Slider1>
      <div class="chanpin-text">
        <div class="chanpin-text1">{{chanpin.cp_mingcheng}}</div>
        <div class="chanpin-text2">￥ {{chanpin.jiage}}</div>
        <div class="chanpin-text3">{{chanpin.cp_jianjie}}</div>
      </div>
      <div class="huiyuan">
        <div class="huiyuan-dengji">普通会员</div>
        <div class="huiyuan-jiage">￥ {{chanpin.jiage}}</div>
      </div>
      <div class="xiaoshou">
        <div>库存：{{chanpin.cp_kucun}}件 | 限购：{{chanpin.xiangou_shuliang}}件/人</div>
        <div>已销售：{{chanpin.cp_yixiaoshou}}件</div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider1 from "./Slider1"
import axios from "axios"
import qs from 'qs'

export default {
  name: 'xiangxi',
  props:['chanpin', 'winHeight', 'images'],
  components: {
    Slider1
  },
  data () {
    return {
      param:[
        {param_mc:"",param_zhi:""}
      ],
      banner:[
        {id:1,src:require('@/assets/tupian/ban1.jpg')},
        {id:2,src:require('@/assets/tupian/ban2.jpg')},
        {id:3,src:require('@/assets/tupian/ban3.jpg')}
      ],
      shangpinData:{
        cp_mingcheng: "",
        jiage: "",
        cp_jianjie: "",
        cp_kucun: "",
        xiangou_shuliang: "",
        cp_yixiaoshou: "",
      }
      
    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chanpin {
  overflow: scroll;
}
.slide-chanpin {
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.chanpin-text {
  padding: 10px;
  font-size: 18px;
}
.chanpin-text1, .chanpin-text2, .chanpin-text3 {
  padding: 2px;
}
.chanpin-text2 {
  color: orangered;
}
.chanpin-text3 {
  color: #999;
  font-size: 16px;
}
.huiyuan {
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
  padding: 10px 0;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.huiyuan-dengji {
  width: 30%;
  display: inline-block;
  text-align: center;
  background-color: orangered;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  margin-left: 10px;
}
.huiyuan-jiage {
  width: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
}
.xiaoshou {
  padding: 10px;
  font-size: 18px;
}

</style>
