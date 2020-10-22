<template>
  <div class="section__photo-text__text">
    <div class="photo-text__text__center">
      <h2>
        {{HalfText.title}}
      </h2>
      <p>
        {{HalfText.text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "HalfText",
  props: {
    HalfText: {
      title: {
        default: 'woman_2.jpg'
      },
      text: {
        default: 'Default photo'
      }
    }
  }
}
</script>

<style lang="scss">
.section {
  &__photo-text {
    &__text {
      padding: 5vw;
      width: 100%;
      height: inherit;
      display: flex;
      align-items: center;
      @media print,screen and (min-width: 768px) {
        width: 50%;
      }
      &.bg-grey {
        background-color: $color-light-grey;
      }
    }
  }
}
</style>