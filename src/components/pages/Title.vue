<template>
  <section class="section__pages section__title">
    <h1 class="section__title_h1">{{ TitlePage }}</h1>
  </section>
</template>

<script>
export default {
name: "Title",
  props: {
    TitlePage: {
      default: 'Title undefined'
    }
  },
}
</script>

<style lang="scss" scoped>
.section__title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-white;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 3rem;
    background-color: $color-black;
    bottom: 5vh;
  }
  &_h1 {
    text-align: center;
    text-transform: uppercase;
    line-height: $h1-font-size;
    @media (max-width: $breakpoints-max-mobile) {
      font-size: $h1-font-size * 0.5;
      line-height: $h1-font-size * 0.5;

    }
 }
}
</style>