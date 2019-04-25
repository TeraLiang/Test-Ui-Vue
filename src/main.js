import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Tera from '../packages/index'

Vue.config.productionTip = false

Vue.use(Tera)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
