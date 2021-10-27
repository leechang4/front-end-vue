import Vue from 'vue'
import App from './App.vue'         // @ 은 절대 경로 // .은 상대경로
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') //index.html에서 옴
