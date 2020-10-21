<template>
<!--  <div>123123</div>-->
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import 'swiper/swiper-bundle.css'

export default {
name: "Swiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive
  }


  // data() {
  //   return {
  //     // dummy slides data
  //     slides: (function () {
  //       var slides = [];
  //       for (var i = 0; i < 600; i += 1) {
  //         slides.push('Slide ' + (i + 1));
  //       }
  //       return slides;
  //     }()),
  //     // virtual data
  //     virtualData: {
  //       slides: [],
  //     },
  //   }
  // },
  // mounted() {
  //   const self = this;
  //   const swiper = new Swiper('.swiper-container', {
  //     // ...
  //     virtual: {
  //       slides: self.slides,
  //       renderExternal(data) {
  //         // assign virtual slides data
  //         self.virtualData = data;
  //       },
  //     },
  //   });
  // },





//
// var mySwiper = new Swiper('.gallery__body', {
//   slidesPerView: 'auto',
//   centeredSlides: true,
//   spaceBetween: 30,
//   freeMode: true,
//   navigation: {
//     nextEl: '.gallery__nav__next',
//     prevEl: '.gallery__nav__prev',
//   }
// });
// // mySwiper();




}





</script>

<style scoped>

</style>