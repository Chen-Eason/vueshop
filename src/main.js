// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  vueSwiper from 'vue-awesome-swiper'//根据package.json中的value导入
import 'swiper/css/swiper.css'//引入样式

import axios from 'axios'
import VueAxios from 'vue-axios'
import chanpin from './page/chanpin'
import VueJsonp from 'vue-jsonp'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

Vue.use(VueJsonp)

Vue.prototype.axios = axios

// axios.defaults.baseURL = '/api'

Vue.config.productionTip = false
// Vue.use(VueAxios,axios);
Vue.use(vueSwiper)

require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

