<template>
  <div class="huiyuan">
    <login1 @userInfo="userInfo" v-if="userData.zt == false"></login1>

    <login2 @userInfo="userInfo" v-if="userData.zt == true"></login2>
  </div>
</template>

<script>
import login1 from "./login1"
import login2 from "./login2"

export default {
  name: 'huiyuan',
  components: {
    login1,
    login2
  },
  data () {
    return {
      // loginzt: false,
      userData:{zt:false}
    }
  },
  methods: {
    userInfo(data) {
      this.userData = data;
      // this.loginzt = data.zt;
      //获取缓存得到string类型
      if (window.localStorage.getItem("loginzt") == "true") {
        this.userData.zt = true;
      } else if (window.localStorage.getItem("loginzt") == "false") {
        this.userData.zt = false;
      }
      console.log("==="+this.userData.zt);
      console.log("typeof==="+typeof(this.userData.zt))
    }
  },
  mounted() {
    var that = this
    if(window.localStorage.getItem("loginzt") != null) {
      if (window.localStorage.getItem("loginzt") == "true") {
        that.userData.zt = true;
      } else if (window.localStorage.getItem("loginzt") == "false") {
        that.userData.zt = false;
      }
      console.log("==--="+this.userData.zt);
      console.log("typeof==--="+typeof(this.userData.zt))
    } else {
      that.userData.zt = false;
      console.log("==--="+this.userData.zt);
      console.log("typeof==--="+typeof(this.userData.zt))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
