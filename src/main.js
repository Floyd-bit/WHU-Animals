import Vue from 'vue'
import App from './App.vue'
import router from './router'

var axios = require('axios')
axios.defaults.baseUrl = "http://localhost:8443/api"

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
