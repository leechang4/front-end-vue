import Vue from "vue";
import App from "./App.vue"; // @ 은 절대 경로 // .은 상대경로
import router from "./router";
import store from "./store";
import axios from "./apis/axiosConfig";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount("#app"); //index.html에서 옴
