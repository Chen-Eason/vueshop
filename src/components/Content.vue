<template>
  <div class="content">
    <router-view class="view"></router-view>
    <div class="nav">
      <div class="nav-item" v-for="(i, index) in tabs" @click="currentPage(index)">
        <router-link :to="i.url">
          <img v-if="current != index" :src="i.img1" class="item-img">
          <img v-else-if="current == index" :src="i.img2" class="item-img">
          <p :class="{active:current == index}">{{i.text}}</p>
        </router-link>
      </div>       
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      current: 0,
      tabs: [
        {text:"首页", url:"/", img1:require('../assets/images/a-off.png'), img2:require('../assets/images/a-on.png')},
        {text:"分类", url:"/fenlei", img1:require('../assets/images/b-off.png'), img2:require('../assets/images/b-on.png')},
        {text:"购物车", url:"/gouwuche", img1:require('../assets/images/c-off.png'), img2:require('../assets/images/c-on.png')},
        {text:"会员", url:"/huiyuan", img1:require('../assets/images/d-off.png'), img2:require('../assets/images/d-on.png')},
        {text:"关于我们", url:"/about", img1:require('../assets/images/e-off.png'), img2:require('../assets/images/e-on.png')}
      ]
    }
  },
  mounted(){
    // this.current=this.tabName
    this.currentPage1();
    console.log(this.current)
  },
  methods: {
    currentPage: function(index) {
      this.current = index;
      console.log("click success")
    },
    currentPage1() {
      var that = this;
      var curUrl = window.location.href;
      var urlLenght = curUrl.length;
      var weizhi = curUrl.indexOf("#");
      var page = curUrl.substr(weizhi+2, urlLenght);
      console.log(this.current);
      console.log(page);
      if(page == "home") {
        that.current = 0;
        console.log(this.current)
      } else if(page == "fenlei") {
        that.current = 1;
        console.log(this.current)
      } else if(page == "gouwuche") {
        that.current = 2;
        console.log(this.current)
      } else if(page == "huiyuan") {
        that.current = 3;
        console.log(this.current)
      } else if(page == "about") {
        that.current = 4;
        console.log(this.current)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  color: #000;
  border-top: 1px solid #eee;
  background-color: #fff;
  text-align: center;
}
.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.nav-item a{
  text-decoration: none;
  color: #000;
}
.nav-item p{
  margin: 0px;
  font-size: 16px;
}
.item-img {
  width: 40px;
  height: 40px;
}
.active {
  color: #999;
}
</style>
