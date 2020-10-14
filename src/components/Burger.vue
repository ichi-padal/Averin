<template>
  <div class="burger" :class='{open: value}'>
    <nav class="burger__nav">
      <div class="burger__menu__wrap">
        <h2 class="burger__title__h2">Menu</h2>
        <ul class="burger__menu burger__menu-main">
          <router-link
              v-for="link in nav_links"
              :key="link.url"
              tag="li"
              active-class="active"
              :to="link.url"
              :exact="link.exact"
          >
            <a href="#" class="">{{link.title}}</a>
          </router-link>
        </ul>
      </div>

      <div class="burger__menu-sub__wrap">
        <h3 class="burger__title__h3">Aesthetic dentistry</h3>
        <ul class="burger__menu burger__menu-sub">
          <router-link
              v-for="link in aesthetic_links"
              :key="link.url"
              tag="li"
              active-class="active"
              :to="link.url"
              :exact="link.exact"
          >
            <a href="#" class="">{{link.title}}</a>
          </router-link>
        </ul>
      </div>

      <div class="burger__menu-sub__wrap">
        <h3 class="burger__title__h3">Regular dentistry</h3>
        <ul class="burger__menu burger__menu-sub">
          <router-link
              v-for="link in regular_links"
              :key="link.url"
              tag="li"
              active-class="active"
              :to="link.url"
              :exact="link.exact"
          >
            <a href="#" class="">{{link.title}}</a>
          </router-link>
        </ul>
      </div>

    </nav>
    <div class="burger__img">
      <picture>
        <source srcset="../assets/img/photo/photo_2020-09-04_13-18-04.jpg" media="(max-width: 1366px)">
        <img src="../assets/img/photo/photo_2020-09-04_13-18-04.jpg" alt="Photo">
      </picture>
    </div>

  </div>
</template>

<script>
export default {
  name: "Burger",
  props: ['value'],
  data: () => ({
    nav_links: [
      {title: 'About Us', url: '/', exact: true},
      {title: 'Safety etiquette', url: '/'},
      {title: 'Сontacts', url: '/'}
    ],
    aesthetic_links: [
      {title: 'Balancing face and smile silhouette', url: '/'},
      {title: '100 hours of silence and hand-crafting', url: '/'},
      {title: 'Perfection of the porcelain fit', url: '/'},
      {title: 'Before/after', url: '/'}
    ],
    regular_links: [
      {title: 'Hygiene', url: '/'},
      {title: 'Perio-therapy', url: '/'},
      {title: 'Restoration', url: '/'},
      {title: 'Implants', url: '/'},
      {title: 'Sleep dentistry', url: '/'},
      {title: 'Endo therapy', url: '/'},
      {title: 'Invisalign', url: '/'}
    ]
  })
}




</script>

<style lang="scss">
.burger {
  //display: none;
  background: $color-black;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns:  2fr 1fr ;
  padding: 220px 120px 60px;
  @media print,screen and (max-width: 1366px) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    padding: 150px 90px 10px;

  }
  &__nav {
    display: grid;
    grid-template-columns: 50% 50% ;
    grid-template-rows: 40% 60%;
    @media print,screen and (max-width: 1366px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 50%;
    }
  }
  &__menu__wrap {

  }
  &__menu-sub__wrap {
    grid-column-start: 2;
    @media print,screen and (max-width: 768px) {
      display: none;
    }
  }
  &__img {
    padding: 60px 0;
    img{

    }
    @media print,screen and (max-width: 768px) {
      display: none;
    }
  }
  &__title {
    &__h2 {
      text-transform: uppercase;
      color: $color-white;
      font-style: normal;
      font-weight: normal;

    }
    &__h3 {
      font-weight: bold;
      color: $color-white;
      font-style: normal;
    }
  }
  &__menu {
    a {
      color: $color-white;
      text-decoration: none;
      &:hover {
        color: $color-secondary;
      }
      &:active {
        color: $color-secondary;
      }
      &.active {
        color: $color-secondary;
      }
    }
    &-main {
      a {
        font-size: $h3-font-size;
      }
    }
    &-sub {
      a {
        font-size: $global-font-size;
      }
    }
  }

}
</style>