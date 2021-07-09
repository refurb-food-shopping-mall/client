import Vue from 'vue'
import VueRouter from 'vue-router'

import $store from '../store'

import Home from '../views/Home'
import Cancel from '../views/Cancel'
import Cart from '../views/Cart'
import LogIn from '../views/LogIn'
import Payment from '../views/Payment'
import Product from '../views/Product'
import Shipping from '../views/Shipping'
import SignUp from '../views/SignUp'
import UserProfileUpdate from '../views/UserProfileUpdate'
import PaymentDetail from '../views/PaymentDetail'
import AddProduct from '../views/AddProduct'
import WriteReview from '../views/WriteReview'
import ProductList from '../views/ProductList' //sw
import MyPageIndex from '../views/MyPage/_index'
import MyPageDeleteAccount from '../views/MyPage/DeleteAccount'

Vue.use(VueRouter)

const ifAlreadyLoggedInRedirectHome = (to, from, next) => {
  if ($store.getters['auth/loggedIn']) {
    next('/');
  } else {
    next();
  }
};

const isLoggedIn = (to, from, next) => {
  if ($store.getters['auth/loggedIn']) {
    next();
  } else {
    next('/login');
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel,
    beforeEnter: isLoggedIn
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
    beforeEnter: ifAlreadyLoggedInRedirectHome
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    beforeEnter: isLoggedIn
  },
  {
    path: '/product',
    name: 'ProductList',
    component: ProductList //sw
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/shipping',
    name: 'Shipping',
    component: Shipping,
    beforeEnter: isLoggedIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: ifAlreadyLoggedInRedirectHome
  },
  {
    path: '/profileupdate',
    name: 'UserProfileUpdate',
    component: UserProfileUpdate,
    beforeEnter: isLoggedIn
  },
  {
    path: '/paymentdetail',
    name: 'PaymentDetail',
    component: PaymentDetail,
    beforeEnter: isLoggedIn
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/writereview',
    name: 'WriteReview',
    component: WriteReview,
    beforeEnter: isLoggedIn
  },
  {
    path: '/mypage/',
    name: 'MyPage',
    component: MyPageIndex,
    beforeEnter: isLoggedIn,
    children: [
      { path: 'profileupdate', component: UserProfileUpdate },
      { path: 'cart', component: Cart },
      { path: 'cancel', component: Cancel },
      { path: 'deleteaccount', component: MyPageDeleteAccount },
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
