// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import chanpin from './chanpin.vue'
import router from './router'
import  vueSwiper from 'vue-awesome-swiper'//根据package.json中的value导入
import 'swiper/css/swiper.css'//引入样式
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'


// Vue.prototype.axios = axios

// // axios.defaults.baseURL = '/api'

// Vue.config.productionTip = false
// Vue.use(VueAxios,axios);
Vue.use(vueSwiper)
Vue.use(VueJsonp)

/* eslint-disable no-new */
new Vue({
  el: '#chanpin',
  router,
  components: { chanpin },
  template: '<chanpin/>'
})
