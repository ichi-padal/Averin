import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './directives/scrollanimation'   //моя ебучая директива, надо допиливать
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


gsap.registerPlugin(ScrollTrigger);
Vue.config.productionTip = false
Vue.directive('scrollanimation', ScrollAnimation);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
