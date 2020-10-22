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
  &_h1 {
    text-align: center;
 }
}
</style>