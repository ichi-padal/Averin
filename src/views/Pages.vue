<template>
  <div>
    <section class="section__pages section__title">
      <h1>Invisalign</h1>
    </section>
    <section class="section__pages section__intro">
      <blockquote class="quote">
        <h4 class="quote__intro">Intro</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="color-secondary">Non a viverra varius sed urna, consequat ornare sagittis.</span> Lorem senectus ut non ac lacus facilisi nulla tincidunt.</p>
      </blockquote>
    </section>
    <section class="section__pages section__photo-text">
      <div class="section__photo-text__photo">
        <picture>
          <source srcset="../assets/img/photo/women_1.jpg">
          <img src="../assets/img/photo/women_1.jpg" alt="Photo">
        </picture>
      </div>
      <div class="section__photo-text__text">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.
        </p>
      </div>
    </section>
    <section class="section__pages  section__gallery">
      <div class="gallery__header">
        <h2>Gallery</h2>
        .
      </div>
      <div class="gallery__body">

      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "Pages"
}
</script>

<style lang="scss">
.section__pages {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  &__photo-text {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    &__photo {
      margin: 1vw;
      width: 50%;
      img {
        width: 100%;
      }
    }
    &__text {
      margin: 5vw;
      width: 50%;


    }
  }
}
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