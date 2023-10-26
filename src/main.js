import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LazyloadVue from "lazyload-vue";
import VueLazyImage from "vue-lazy-images";
import VueSplide from "@splidejs/vue-splide";

Vue.use(VueSplide);
Vue.use(VueLazyImage);
Vue.use(LazyloadVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
