import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VueAwesomeSwiper from 'vue-awesome-swiper';


gsap.registerPlugin(ScrollTrigger);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false
Vue.use(window.VueAwesomeSwiper)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
