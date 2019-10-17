<!-- <template>
  <div>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides">
        <router-link :to="{name:'BookDetail',params:{id:slide.id}}">
          <img :src="slide.img_url"/>
        </router-link>
      </div>
    </div> -->
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!--<div class="swiper-scrollbar"></div>-->
  <!-- </div>
  </div>
</template> -->
<!-- <script>
  import 'swiper/css/swiper.css'
  import Swiper from 'swiper'
  export default {
    name: "Slider",
    data(){      
      return{
        slides:[
          {id:1,img_url:require('../assets/tupian/ban1.jpg')},
          {id:2,img_url:require('../assets/tupian/ban2.jpg')},
          {id:3,img_url:require('../assets/tupian/ban3.jpg')}
        ]
      }
    },
    mounted(){      
      new Swiper (this.$refs.slider, {
        loop: true,        
        // 如果需要分页器        
        pagination: '.swiper-pagination',        
        // 如果需要前进后退按钮        
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',        // 如果需要滚动条        
        scrollbar: '.swiper-scrollbar',
      })
    }
  }
</script> -->
<!-- <style>
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    /*max-width: 100%;*/
    width: 100%;
    height: 200px;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
.swiper-slide a {
  width: 100%;
}
</style> -->













<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banner" v-bind:key="item.id">
        <img class="swiper" v-bind:src="item.src"/>
      </swiper-slide>
      <div class="swiper-pagination " slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default{
  name:'Slider',
  props:['banner'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true, // 自动切换
        loop: true, // 循环
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets' // 默认圆点指示点
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
        
      },
      // banner:[
      //     {id:1,src:require('../assets/tupian/ban1.jpg')},
      //     {id:2,src:require('../assets/tupian/ban2.jpg')},
      //     {id:3,src:require('../assets/tupian/ban3.jpg')}
      //   ]
    }
  }
}
</script>
<style scoped>
.swiper {
  height: 200px;
  width: 100%;
}
</style>
