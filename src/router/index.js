import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import fenlei from '@/components/fenlei'
import gouwuche from '@/components/gouwuche'
import huiyuan from '@/components/huiyuan'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/gouwuche',
      name: 'gouwuche',
      component: gouwuche
    },
    {
      path: '/huiyuan',
      name: 'huiyuan',
      component: huiyuan
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
