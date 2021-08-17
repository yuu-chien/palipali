import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'jquery';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import Swiper from 'swiper';
import VueSilentbox from 'vue-silentbox';
import AOS from 'aos';
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import { ValidationProvider } from 'vee-validate';
import store from './store/index';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// 將 $ 註冊為全域符號
window.$ = $;
Vue.use(VueAxios, axios);
Vue.use(VueSilentbox);
Vue.use(AOS);
Vue.use(Vuex);
Vue.component('Loading', Loading);
Vue.component('Swiper', Swiper);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
