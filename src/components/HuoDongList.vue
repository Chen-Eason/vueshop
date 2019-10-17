<template>
  <div class="xinxi-list">
    <div  v-for="item in hdlist">
      <a href="#" class="xinxi">
        <img src="../assets/img/news.png" class="xinxi-icon"></img>
        <!-- <text class="xinxi-text">{{item.myshijian}} {{item.mybiaoti}}</text> -->
        <p class="xinxi-text">{{item}}</p>
        <img src="../assets/img/right.png" class="xinxi-arrow"></img>
    </a>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HueDongList',
  props:['hdlist'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xinxi {
  display: flex;
  padding: 5px;
  align-items: center;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: #000;
}
.xinxi-icon {
  width: 30px;
  height: 30px;
}
.xinxi-text {
  flex: 1;
  /* 文字省略,先设置overflow: hidden和
  white-space: nowrap,最后设置text-overflow: ellipsis才会生效*/
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  text-align: left;
  font-size: 18px;
}
.xinxi-arrow {
  width: 30px;
  height: 30px;
}

</style>
