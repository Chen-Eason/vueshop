import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shangpin from '../components/shangpin'
import xiangxi from '../components/xiangxi'
import pinglun from '../components/pinglun'
import Content1 from '../components/Content1'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/chanpin.html#/',
    //   redirect: '/chanpin.html#/shangpin',
    // },
    {
      path: '/Content1',
      name: 'Content1',
      component: Content1
    },
    {
      path: '/shangpin',
      name: 'shangpin',
      component: shangpin
    },
    {
      path: '/xiangxi',
      name: 'xiangxi',
      component: xiangxi
    },
    {
      path: '/pinglun',
      name: 'pinglun',
      component: pinglun
    }
  ]
})
