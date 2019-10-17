<template>
  <div class="about">
    <div class='gy1'>
      <img src='../assets/img/qyln.jpg' style="height: 150px; width: 100%"></img>
    </div>
    <div class="wx-cells">
      <div v-for="item in aboutList">
        <a href="#">
          <div class="wx-cell">
            <img class="wx-cell-icon" :src="item.img1"></img>
            <p class="wx-cell-text">{{item.text}}</p>
            <img class="wx-cell-arrow" :src="item.img2"></img>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      aboutList:[
        {text:'帮助中心', img1:require('../assets/img/sys01.png'), img2:require('../assets/img/right.png')},
        {text:'活动列表', img1:require('../assets/img/sys02.png'), img2:require('../assets/img/right.png')},
        {text:'留言反馈', img1:require('../assets/img/sys03.png'), img2:require('../assets/img/right.png')},
        {text:'关于我们', img1:require('../assets/img/sys04.png'), img2:require('../assets/img/right.png')}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gy1 image{
  width: 100%;
  height: 100px;
}
.wx-cells {
  width: 100%;
  font-size: 17px;
  background-color: #fff;
}
.wx-cells a{
  text-decoration: none;
  color: #000;
}
.wx-cell {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}

.wx-cell-icon{
  width: 28px;
  height: 28px;
}

.wx-cell-text{
  flex: 1;
  margin: 0;
  margin-left: 15px;
}

.wx-cell-arrow{
  width: 15px;
  height: 15px;
  margin-left: 5px;
}

/*.wx-cell-inner{
  padding: 30rpx 30rpx 30rpx 0;  
  margin-left: 30rpx; 
  border-bottom: 1rpx solid #d9d9d9; 
}

.wx-cell-left{
  font-size: 35rpx;
  align-items: center;
}

.wx-cell-right{
  align-items: center;
}

.wx-cell-right-text{
  font-size: 30rpx;
  color: #808080;
}*/
</style>
