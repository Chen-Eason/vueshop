<template>
  <div class="rank">
    <div v-for="(item, index) in product2" class="rank-item">
      <!-- <a href="/pages/chanpin/xiangxi?cpid={{item.cp_id}}&cpmc={{item.cp_mingcheng}}" class="rank-link"> -->
      <a :href="'/vueshop/dist/chanpin.html#/shangpin?cpid='+item.cp_id" class="rank-link">
        <div class="rank-img">
          <img :src="item.cp_tupian"></img>
        </div>
        <div class="rank-xinxi">
          <p class="rank-name">{{item.cp_mingcheng}}</p>
          <p class="rank-jianjie">产品简介</p>
          <div class="rank-num">
            <p class="rank-num1">NO.{{index+1}} </p>
            <p class="rank-num2"> | 456人付款 | </p>
            <p class="rank-num3"> ￥</p>
            <p class="rank-num4"> {{item.jiage}}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product2',
  props:['product2'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rank {

}
.rank-item {
  /*display: flex;*/
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.rank-link {
  width: 100%;
  text-decoration: none;
  color: #000;
  display: flex;
}
.rank-img {
  width: 30%;
}
.rank-img img{
  width: 100%;
  /* padding: 10rpx; */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 1px #ccc;
}
.rank-xinxi {
  width: 70%;
  padding: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}
.rank-name, .rank-jianjie, .rank-num1, .rank-num2, .rank-num3, .rank-num4 {
  margin: 0;
  display: inline-block;
}
.rank-name {
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}
.rank-jianjie {
  color: #666;
  font-size: 11px;
  margin-bottom: 10px;
}
.rank-num {
  font-size: 13px;
  display: flex;
  align-items: center;
}
.rank-num1 {
  color: lawngreen;
}
.rank-num2 {
  color: #666;
  font-size: 15px;
  margin: 5px;

}
.rank-num3 {
  font-size: 15px;
  color: orangered;
}
.rank-num4 {
  color: orangered;
}

</style>
