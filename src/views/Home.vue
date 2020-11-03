<template>
  <div class="home-page__container">
    <Preloader/>
    <LoaderClick/>
    <div class="home__container">
      <div class="separator">
        <div class="separator__cross"></div>
      </div>
      <router-link to="/aesthetic" class="nav_main__item">
        <h2 class="nav_main__item__h2">Aesthetic <br> <em>dentistry</em></h2>
      </router-link>
      <div class="separator separator__big">
        <div class="separator__cross"></div>
      </div>
      <router-link to="/regular" class="nav_main__item">
        <h2 class="nav_main__item__h2">Regular <br> <em>dentistry</em></h2>
      </router-link>
      <div class="separator">
        <div class="separator__cross"></div>
      </div>

    </div>

    <Video/>

  </div>
</template>

<script>
// @ is an alias to /src
import Preloader from "@/components/Preloader";
import LoaderClick from "@/components/LoaderClick";
import Video from "@/components/header/chunks/Video";

export default {
  name: 'Home',
  components: {
    Video,
    LoaderClick,
    Preloader
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
    border-color: $color-secondary;
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

</style>