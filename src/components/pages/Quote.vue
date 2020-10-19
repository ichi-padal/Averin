<template>
  <section class="section__pages section__intro">
    <blockquote class="quote">
      <h4 class="quote__intro">Intro</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="color-secondary">Non a viverra varius sed urna, consequat ornare sagittis.</span> Lorem senectus ut non ac lacus facilisi nulla tincidunt.</p>
    </blockquote>
  </section>
</template>

<script>
export default {
name: "Quote"
}
</script>

<style lang="scss">
.quote {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10vw;
  padding: 10vw;
  @media print,screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1vw;
  }
  &__intro {
    text-align: right;
    font-weight: normal;
    margin: 0.7rem 0;
    @media print,screen and (max-width: 768px) {
      text-align: left;
    }
  }
  p {
    font-size: $h2-font-size;
    margin: 0;
  }
}
</style>