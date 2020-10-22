<template>
  <div class="section__photo-text__photo">
    <picture>
      <source srcset="~@/assets/img/photo/woman_2.jpg">
      <img src="~@/assets/img/photo/woman_2.jpg" alt="Photo">
    </picture>
  </div>
</template>

<script>
export default {
name: "HalfPhoto"
}
</script>

<style lang="scss">
.section {
  &__photo-text{
    &__photo {
      margin: 1vw;
      width: 100%;
      overflow: hidden;
      @media print,screen and (min-width: 768px) {
        width: 50%;
      }
      img {
        -o-object-fit: cover;
        object-fit: cover;
        min-height: 100vh;
        width: auto;
      }
    }
  }
}
picture{
  width: 100%;
  background-repeat: no-repeat;
  -webkit-transition: all 1s;
  transition: all 1s;
  display: block;
}
</style>