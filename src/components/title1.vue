<template>
  <div class="title">
    <div class="line-y"></div>
    <p class="title-text">{{title1}}</p>
    <p class="title-more">更多>></p>
  </div>
</template>

<script>

export default {
  name: 'title1',
  props:['title1'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  align-items: center;
  background-color: aliceblue; 
}
.line-y {
  width: 3px;
  height: 20px;
  margin: 5px;
  background-color: chartreuse;
}
.title-text {
  margin: 0;
  flex: 1;
  color: #666;
  text-shadow: 1px 1px 1px gainsboro;
  text-align: left;
}
.title-more {
  margin: 0;
  color: #666;
  margin-right: 5px;
  text-shadow: 2px 2px 2px gainsboro;
}

</style>
