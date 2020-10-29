import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ScrollAnimation from './directives/scrollanimation'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'



Vue.config.productionTip = false
Vue.directive('scrollanimation', ScrollAnimation);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
