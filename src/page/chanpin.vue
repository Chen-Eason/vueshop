<template>
  <div id="chanpin">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- <Content1 /> -->
    <Content1></Content1>
  </div>
</template>

<script>
import Content1 from "./components/Content1";
export default {
  name: 'chanpin',
  components:{
    Content1
  }
}
</script>

<style>
#chanpin {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
