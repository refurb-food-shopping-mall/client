import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootswatch/dist/minty/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios';

library.add(faUserSecret, faShoppingCart, faUser, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$axios = axios
Vue.prototype.$domain = "http://localhost:3000/api"

Vue.config.productionTip = false

// Vue.mixin({
//   methods: {
//     async $api(url, data){
//       return (await axios({
//           method: 'post',
//           url,
//           data
//       }).catch(e => {
//           console.log(e)
//       })).data;
//     }
//   }
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
