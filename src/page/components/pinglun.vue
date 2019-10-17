<template>
  <div class="shangpin" :style="'height:' + winHeight + 'px'">
    <form >
      <div class="pingjia">
        <div class="pingjia-title">评价（请打分）</div>
        <div  class="stars">
          <div class="stars-list" v-for="(item, index) in starts">
            
            <img v-if="score > item" class="star-image" src="@/assets/images/selected.png"  @click="selectStars(index)"></img>

            <img v-else class="star-image" src="@/assets/images/normal.png"  @click="selectStars(index)"></img>
          </div>
        </div>  
        <div class="pingjia-content">
          <textarea placeholder="请输入评论，500字以内" name="neirong"></textarea>
        </div>
        <button class="pingjia-btn" form-type="submit">提交评论</button>
      </div>
    </form>
    <div class="pj-list" :style="'height:' + (winHeight - 277) + 'px'">
      <div class="pj" v-for="item in [1,2,3,4,5,6,7,8,9]">
        <div class="pj-user clearfloat">
          <div class="pj-username">用户名{{item}}</div>
          <div class="pj-date">2019/1/1 12:00:00</div>
        </div>
        <div class="pj-score">
          <img src="@/assets/images/selected.png" class="pj-score-image"></img>  1 星
        </div>
        <div class="pj-content">评论内容</div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider1 from "./Slider1"
import axios from "axios"
import qs from 'qs'

export default {
  name: 'pinglun',
  props:['chanpin', 'winHeight'],
  components: {
    Slider1
  },
  data () {
    return {
      starts:[0,1,2,3,4],
      score: 0,
      normalSrc: '/images/normal.png',
      selectedSrc: '/images/selected.png',
      banner:[
        {id:1,src:require('@/assets/tupian/ban1.jpg')},
        {id:2,src:require('@/assets/tupian/ban2.jpg')},
        {id:3,src:require('@/assets/tupian/ban3.jpg')}
      ],     
    }
  },
  methods: {
    selectStars(index) {
      this.score = index + 1;
    }
  },
  mounted() {
    console.log(this.chanpin)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chanpin {
  overflow: scroll;
}
.pingjia {
  background-color: #f2f2f2;
  padding: 0 10px 10px 10px;
}
.pingjia-content {
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  overflow: hidden;
}
.pingjia-content textarea {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.pingjia-btn {
  background-color: gold;
  color: #fff;
  width: 150px;
  height: 50px;
  margin-top: 10px;
  position: relative;
  left: 50%;
  margin-left: -75px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
}
.pingjia-title {
  padding: 10px 20px;
}
.stars {
  background-color: #eee;
  padding: 5px;
}
.stars-list {
  display: inline-block;
}
.star-image {
  height: 40px;
  width: 40px;
}

.pj-list {
  overflow: scroll;
}

.pj {
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 5px;
  margin-top: 10px;
}
.pj-user {
  font-size: 14px;
  padding-bottom: 5px;
  border-bottom: 1px dashed #999;
}
.pj-username {
  display: inline-block;
}
.pj-date {
  color: #999;
  display: block;
  float: right;
}
.pj-score {
  display: flex;
  align-items: center;
}
.pj-score-image {
  height: 20px;
  width: 20px;
  margin: 2px 0;
}
.pj-score-image:last-of-type {
  margin-right: 10px;
}
.pj-content {
  color: #666;
  font-size: 12px;
  padding: 5px;
}

</style>
