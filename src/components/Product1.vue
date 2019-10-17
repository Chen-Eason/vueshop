<template>
  <div class="chanpin">
    <div v-for="item in product1" class="chanpin-item">
      <a :href="'/vueshop/dist/chanpin.html#/shangpin?cpid='+item.cp_id" class="chanpin-link">
      <img :src="item.cp_tupian" class="chanpin-img"></img>
      <p class="chanpin-name">{{item.cp_mingcheng}}</p>
      <div>
        <p class="chanpin-num1">￥</p>
        <p class="chanpin-num2">{{item.jiage}}</p>
        <p class="chanpin-num3">123人付款</p>
      </div>
    </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product1',
  props:['product1'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chanpin {
  display: flex;
  flex-wrap: wrap;
}
.chanpin-item {
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  color: #000;
}
.chanpin-link {
  width: 100%;
  text-decoration: none;
  color: #000;
}
.chanpin-img {
  padding: 5px;
  /* border: 2rpx solid #ccc; */
  box-shadow: 0 1px 1px #ccc;
  width: 100%;
  box-sizing: border-box;
}
.chanpin-name {
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0;
}
.chanpin-num1, .chanpin-num2, .chanpin-num3 {
  margin: 0;
  display: inline-block;
}
.chanpin-num1 {
  color: orangered;
  font-size: 16px;
}
.chanpin-num2 {
  color: orangered;
  font-size: 20px;
  margin: 0 5px;
}
.chanpin-num3 {
  color: #666;
  font-size: 16px;
}

</style>
