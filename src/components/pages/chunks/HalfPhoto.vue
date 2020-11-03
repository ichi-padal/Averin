<template>
  <div class="section__photo-text__photo">
    <picture>
      <source :srcset="require(`@/assets/img/photo/${HalfPhoto.photoFile}`)">
      <img :src="require(`@/assets/img/photo/${HalfPhoto.photoFile}`)" :alt="HalfPhoto.photoAlt">
    </picture>
  </div>
</template>

<script>
export default {
name: "HalfPhoto",
  props: {
    HalfPhoto: {
      photoFile: {
        default: 'woman_2.jpg'
      },
      photoAlt: {
        default: 'Default photo'
      }
    }
  }
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
        object-fit: cover;
        min-height: 100vh;
        width: 100%;
        transition: all 1.5s;
      }
    }
    :hover img{
      transform: scale(1.2);
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