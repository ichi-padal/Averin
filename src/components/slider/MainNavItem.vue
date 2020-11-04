<template>
  <router-link :to="navitem.url" class="nav_main__item">
    <h2 v-if="navitem.index" class="nav_main__item__h2" >
      <slot></slot>
      <span v-html="navitem.title"></span>
    </h2>
    <h2 v-else class="nav_main__item__h2" v-html="navitem.title"></h2>
  </router-link>
</template>

<script>
export default {
name: "MainNavItem",
  props: {
    navitem: {
      title: {
        default: 'Title undefined'
      },
      url: {
        default: '/'
      },
      index: false
    }
  }
}
</script>

<style lang="scss">
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
</style>