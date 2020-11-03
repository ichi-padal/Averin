<template>
  <div  class="home-page__container">

    <swiper class="swiper swiper-bg" :options="swiperOptionBg" ref="swiperBg">

      <swiper-slide
          v-for="slidebg in slidersbg"
          :key="slidebg.backgroundPhoto"
          :style="{backgroundImage: 'url(~@/assets/img/photo/' + slidebg.backgroundPhoto + ')' }"

      ></swiper-slide>

      <div class="swiper-pagination swiper-bg__pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>

    <swiper class="swiper swiper-nav" :options="swiperOptionNav" ref="swiperNav">

      <swiper-slide class="swiper-nav__slide">
        <router-link to="/balancingface" class="nav_main__item">
          <h2 class="nav_main__item__h2"><span class="nav_main__item__number">01</span>Balancing face and smile silhouette</h2>
        </router-link>
        <Separator/>
      </swiper-slide>

      <swiper-slide class="swiper-nav__slide">
        <router-link to="/balancingface" class="nav_main__item">
          <h2 class="nav_main__item__h2"><span class="nav_main__item__number">01</span>Balancing face and smile silhouette</h2>
        </router-link>
        <Separator/>
      </swiper-slide>
      <swiper-slide class="swiper-nav__slide">
        <router-link to="/handcrafting" class="nav_main__item">
          <h2 class="nav_main__item__h2"><span class="nav_main__item__number">02</span>100 hours of silence and hand-crafting</h2>
        </router-link>
        <div class="separator">
          <div class="separator__cross"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-nav__slide">
        <router-link to="/perfection" class="nav_main__item">
          <h2 class="nav_main__item__h2"><span class="nav_main__item__number">03</span>Perfection of the porcelain fit</h2>
        </router-link>
        <div class="separator">
          <div class="separator__cross"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-nav__slide">
        <router-link to="/before" class="nav_main__item">
          <h2 class="nav_main__item__h2"><span class="nav_main__item__number">04</span>Before/after</h2>
        </router-link>
        <div class="separator">
          <div class="separator__cross"></div>
        </div>
      </swiper-slide>
      <div class="swiper-prev" slot="button-prev"></div>
      <div class="swiper-next " slot="button-next"></div>
    </swiper>
    <router-link class="back-to" to="/">back to main section</router-link>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Separator from "@/components/slider/Separator";

export default {
name: "Aesthetic",
  components: {
    Separator,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slidersbg: [
        {backgroundPhoto: "woman_4.jpg"},
        {backgroundPhoto: "woman_2.jpg"},
        {backgroundPhoto: "woman_1.jpg"},
        {backgroundPhoto: "woman_3.jpg"},
      ],
      swiperOptionBg: {
        spaceBetween: 10,
        effect: 'fade',
        loop:true,
        loopedSlides: 4,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-next ',
          prevEl: '.swiper-prev'
        },
      },
      swiperOptionNav: {
        loop: true,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 2,
        speed: 1000,
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperBg = this.$refs.swiperBg.$swiper
      const swiperNav = this.$refs.swiperNav.$swiper
      swiperBg.controller.control = swiperNav
      swiperNav.controller.control = swiperBg
    })
  }
}
</script>

<style lang="scss">
.home-page__container {
  position: relative;
}
.swiper-prev,
.swiper-next {
  z-index: 50;
  position: absolute;
  top: 0;
  width: 25vw;
  height: 100vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  outline: none;
}
.swiper-prev {
  left: 0;
  right: auto;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%);
}
.swiper-next  {
  right: 0;
  left: auto;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.9) 100%);
}

.swiper-bg {
  height: 100vh;
  z-index: 1;
  .swiper-slide {
    background-position: center;
    background-size: cover;

    &.slide-1 {
      background-image:url('~@/assets/img/photo/woman_4.jpg')
    }
    &.slide-2 {
      background-image:url('~@/assets/img/photo/woman_1.jpg')
    }
    &.slide-3 {
      background-image:url('~@/assets/img/photo/woman_2.jpg')
    }
    &.slide-4 {
      background-image:url('~@/assets/img/photo/woman_3.jpg')
    }
  }
  &__pagination {
    color: $color-white;
  }
}

.swiper-nav {
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
  top: 0;
  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .separator {
      position: absolute;
      top: 50%;
      right: 0;
      margin-right: -1rem;
    }
  }
}

.nav_main__item {
  width: 15rem;
  height: 15rem;
  border: 1px solid $color-white;
  box-sizing: border-box;
  transform: rotate(-135deg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  text-decoration: none;
  &__h2 {
    color: $color-white;
    transform: rotate(-225deg);
    transition: 0.5s;
    font-family: $title-font-family;
    font-weight: normal;
    text-align: center;
    font-size: $h3-font-size;
  }
  &__number {
    width: 4rem;
    position: absolute;
    top: -3rem;
    right: 50%;
    margin-right: -2rem;
    color: $color-secondary;
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    width: 0;
    border-top: 1px solid $color-white;
    bottom: -3rem;
    right: -3rem;
    transform: rotate(-135deg);
    height: 0;
    margin-right: 0;
    transition: width 0.5s, margin 0.5s;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 1px solid $color-white;
    top: -3rem;
    left: -3rem;
    margin-left: 0;
    transform: rotate(-135deg);
    transition: width 0.5s, margin 0.5s;
  }
  &:hover {
    .nav_main__item__h2 {
      color: $color-secondary;
      //text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
    }
    &:after{
      width: 2rem;
      margin-right: -1rem;
    }
    &:before {
      width: 2rem;
      margin-left: -1rem;
    }
  }
}




.back-to {
  position: absolute;
  bottom: 2vh;
  left: 1vw;
  z-index: 100;
  color: $color-white;
  text-decoration: none;
  text-transform: uppercase;
}
</style>