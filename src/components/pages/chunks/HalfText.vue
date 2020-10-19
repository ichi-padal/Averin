<template>
  <div class="section__photo-text__text">
    <div class="photo-text__text__center">
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "HalfText"
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