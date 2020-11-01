import Vue from 'vue'
import App from './App.vue'
import router from "./router";

// VueYandexMetrika
import VueYandexMetrika from 'vue-yandex-metrika'
Vue.use(VueYandexMetrika, {
  id: 68924467,
  router: router,
  env: process.env.NODE_ENV
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
