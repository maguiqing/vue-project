import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/footer',
      name: 'Footer',
      component:Footer 
    }
  ]
})
