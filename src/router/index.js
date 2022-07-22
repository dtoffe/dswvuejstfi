import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import User from '../views/User.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      props: true,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      props: true,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
]
  
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router
