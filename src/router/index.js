import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const ShoppingCart = () => import('@/views/shoppingCart/ShoppingCart')
const Profile = () => import('@/views/profile/Profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
