import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Me from '../views/Me/Me.vue'


Vue.use(VueRouter)

const routes = [{ path: '/',component: Home },
  {path:'/me',component:Me}
  
]

const router = new VueRouter({
  routes
})

export default router
