<template>
  <div  class="home-page__container">
    <swiper class="swiper swiper-bg" :options="swiperOptionBg" ref="swiperBg">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <div class="swiper-pagination swiper-bg__pagination swiper-pagination-white" slot="pagination"></div>

    </swiper>
    <swiper class="swiper swiper-nav" :options="swiperOptionNav" ref="swiperNav">
      <swiper-slide class="swiper-nav__slide">
        <router-link to="/balancingface" class="nav_main__item">
          <h2 class="nav_main__item__h2">Balancing face and smile silhouette</h2>
        </router-link>
        <div class="separator">
          <div class="separator__cross"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-nav__slide">
        <router-link to="/handcrafting" class="nav_main__item">
          <h2 class="nav_main__item__h2">100 hours of silence and hand-crafting</h2>
        </router-link>
        <div class="separator">
          <div class="separator__cross"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-nav__slide">
        <router-link to="/perfection" class="nav_main__item">
          <h2 class="nav_main__item__h2">Perfection of the porcelain fit</h2>
        </router-link>
        <div class="separator">
          <div class="separator__cross"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-nav__slide">
        <router-link to="/before" class="nav_main__item">
          <h2 class="nav_main__item__h2">Before/after</h2>
        </router-link>
        <div class="separator">
          <div class="separator__cross"></div>
        </div>
      </swiper-slide>
      <div class="swiper-prev" slot="button-prev"></div>
      <div class="swiper-next " slot="button-next"></div>
    </swiper>
    <router-link class="back-to" to="/home">back to main section</router-link>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
name: "Aesthetic",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
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

.separator {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 3rem;
  height: 3rem;
  margin-top: -3rem;
  &__big {
    width: 5rem;
    height: 5rem;
    margin-top: -5rem;
  }
  &__cross {
    width: 100%;
    border-bottom: 1px solid $color-white;
    position: relative;
    margin-top: 100%;
    margin-left: 0;
    transform: rotate(225deg);
    box-sizing: border-box;
    &:after {
      content: '';
      border-bottom: 1px solid $color-white;
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0;
      transform: rotate(-90deg);
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