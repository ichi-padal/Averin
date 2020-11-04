<template>
  <div class="home-page__container">
    <Preloader/>
    <LoaderClick/>
    <div class="home__container">

      <Separator class="tablet-none"/>

      <MainNavItem :navitem="navitemAesthetic"/>

      <Separator class="separator__big mobile-none"/>

      <MainNavItem :navitem="navitemRegular"/>

      <Separator class="tablet-none"/>

      <DownPicture class="mobile-only"/>

    </div>

    <Video/>

  </div>
</template>

<script>
// @ is an alias to /src
import Preloader from "@/components/Preloader";
import LoaderClick from "@/components/LoaderClick";
import Video from "@/components/header/chunks/Video";
import Separator from "@/components/slider/Separator";
import MainNavItem from "@/components/slider/MainNavItem";
import DownPicture from "@/components/pages/chunks/DownPicture";

export default {
  name: 'Home',
  components: {
    DownPicture,
    MainNavItem,
    Separator,
    Video,
    LoaderClick,
    Preloader
  },
  data() {
    return {
      navitemAesthetic: {
        url: '/aesthetic',
        title: 'Aesthetic <br> <em>dentistry</em>'
      },
      navitemRegular: {
        url: '/regular',
        title: 'Regular <br> <em>dentistry</em>'
      }
    }
  }
}
</script>

<style lang="scss">
.home-page__container {
  position: relative;
}
.home__container {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  @media (max-width: $breakpoints-max-mobile) {
    flex-direction: column;
    height: 200vh;
    justify-content: space-around;
  }
}
</style>