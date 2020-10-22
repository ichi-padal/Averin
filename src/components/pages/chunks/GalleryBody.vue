<template>
    <swiper
        class="gallery__body"
      :options="swiperOptions"
    >

      <swiper-slide  class="gallery__item">
        <picture>
          <source srcset="@/assets/img/photo/photo_2020-09-04_13-18-04.jpg" media="(max-width: 1366px)">
          <img src="@/assets/img/photo/photo_2020-09-04_13-18-04.jpg" alt="Photo">
        </picture>
      </swiper-slide>
      <swiper-slide  class="gallery__item">
        <picture>
          <source srcset="@/assets/img/photo/woman_1.jpg" media="(max-width: 1366px)">
          <img src="@/assets/img/photo/woman_1.jpg" alt="Photo">
        </picture>
      </swiper-slide >
      <swiper-slide  class="gallery__item">
        <picture>
          <source srcset="@/assets/img/photo/woman_2.jpg" media="(max-width: 1366px)">
          <img src="@/assets/img/photo/woman_2.jpg" alt="Photo">
        </picture>
      </swiper-slide >
      <swiper-slide  class="gallery__item">
        <picture>
          <source srcset="@/assets/img/photo/woman_5.jpg" media="(max-width: 1366px)">
          <img src="@/assets/img/photo/woman_5.jpg" alt="Photo">
        </picture>
      </swiper-slide >
      <swiper-slide  class="gallery__item">
        <picture>
          <source srcset="@/assets/img/photo/woman_3.jpg" media="(max-width: 1366px)">
          <img src="@/assets/img/photo/woman_3.jpg" alt="Photo">
        </picture>
      </swiper-slide >
      <swiper-slide  class="gallery__item">
        <picture>
          <source srcset="@/assets/img/photo/woman_4.jpg" media="(max-width: 1366px)">
          <img src="@/assets/img/photo/woman_4.jpg" alt="Photo">
        </picture>
      </swiper-slide >
      <swiper-slide  class="gallery__item">
        <picture>
          <source srcset="@/assets/img/photo/photo_2020-09-04_13-18-04.jpg" media="(max-width: 1366px)">
          <img src="@/assets/img/photo/photo_2020-09-04_13-18-04.jpg" alt="Photo">
        </picture>
      </swiper-slide >

    </swiper>

</template>

<script>
// import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// SwiperCore.use([Navigation]);



export default {
name: "GalleryBody",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        freeMode: true,
        updateOnWindowResize: true,
        uniqueNavElements: true,
        grabCursor: true,
        observeParents: true,
        navigation: {
          nextEl: '.gallery__nav__next',
          prevEl: '.gallery__nav__prev',
        }

      }
    }
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper
  //   }
  // },
  // mounted() {
  //   console.log('Current Swiper instance object', this.swiper)
  //   this.swiper.slideTo(3, 1000, false)
  // }

  // data() {
  //   return {
  //     swiperOption: {
  //       slidesPerView: 'auto',
  //       centeredSlides: true,
  //       spaceBetween: 30,
  //       freeMode: true,
  //       navigation: {
  //         nextEl: '.gallery__nav__next',
  //         prevEl: '.gallery__nav__prev',
  //       }
  //     }
  //   }
  // }



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