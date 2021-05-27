import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Cancel from '../views/Cancel'
import Cart from '../views/Cart'
import LogIn from '../views/LogIn'
import Notice from '../views/Notice'
import Payment from '../views/Payment'
import Product from '../views/Product'
import Shipping from '../views/Shipping'
import SignUp from '../views/SignUp'
import UserProfileUpdate from '../views/UserProfileUpdate'
import PaymentDetail from '../views/PaymentDetail'
import AddProduct from '../views/AddProduct'
import WriteReview from '../views/WriteReview'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/shipping',
    name: 'Shipping',
    component: Shipping
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/profileupdate',
    name: 'UserProfileUpdate',
    component: UserProfileUpdate
  },
  {
    path: '/paymentdetail',
    name: 'PaymentDetail',
    component: PaymentDetail
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/writereview',
    name: 'WriteReview',
    component: WriteReview
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
