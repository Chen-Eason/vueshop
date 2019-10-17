<!-- <template>
  <div class="shangpin" ref="shangpin">
    <div class="chanpin">
      
      <Slider1 :banner="banner"></Slider1>
      <div class="chanpin-text">
        <div class="chanpin-text1">{{shangpinData.cp_mingcheng}}</div>
        <div class="chanpin-text2">￥ {{shangpinData.jiage}}</div>
        <div class="chanpin-text3">{{shangpinData.cp_jianjie}}</div>
      </div>
      <div class="huiyuan">
        <div class="huiyuan-dengji">普通会员</div>
        <div class="huiyuan-jiage">￥ {{shangpinData.jiage}}</div>
      </div>
      <div class="xiaoshou">
        <div>库存：{{shangpinData.cp_kucun}}件 | 限购：{{shangpinData.xiangou_shuliang}}件/人</div>
        <div>已销售：{{shangpinData.cp_yixiaoshou}}件</div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="shangpin" :style="'height:' + winHeight + 'px'">
    <!-- <div class="chanpin"> -->
      
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
      <div class="youji">
        <div>送至&nbsp;&nbsp; <span>广东 深圳 南山区</span></div>
        <div>运费&nbsp;&nbsp; <span>免运费</span></div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Slider1 from "./Slider1"
import axios from "axios"
import qs from 'qs'

export default {
  name: 'shangpin',
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
      that.$refs.shangpin.style.height = (window.screenHeight - 75) + "px";
      window.onresize = () => {
          window.screenHeight = document.documentElement.clientHeight;
          // that.screenWidth = window.screenWidth
          that.$refs.shangpin.style.height = (window.screenHeight - 75) + "px";
          console.log("height"+window.screenHeight)
      }
    },
    getShangpinData() {
      var that = this;
      for(var i = 0; i < that.param.length; i++) {
        if(that.param[i].param_mc == "cpid") {
          axios.post('/api/wx_sp_info-a.asp',
            qs.stringify({cp_id: that.param[i].param_zhi})
          ).then(res=>{
            that.shangpinData = res.data;
            console.log("request success1");
            console.log("shangpinData="+ JSON.stringify(res.data));
            console.log("id="+that.param[i].param_zhi)
          }).catch(error=>{
            console.log("request fail1")
          })
        }
      }
    }
  },
  mounted() {
    // this.getParams();
    // this.getWinHeight();
    // this.getShangpinData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shangpin {
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
  border-bottom: 5px solid #eee;
  color: #999;
}
.youji {
  padding: 10px;
  font-size: 18px;
  color: #999;
}
.youji span {
  color: #000;
}

</style>
