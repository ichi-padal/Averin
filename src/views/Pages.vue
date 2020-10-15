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
        <div class="gallery__nav">
          <a href="#">
            <svg width="67" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.505028 5.50502C0.231659 5.77839 0.231659 6.2216 0.505028 6.49497L4.9598 10.9497C5.23317 11.2231 5.67638 11.2231 5.94975 10.9497C6.22311 10.6764 6.22311 10.2332 5.94975 9.95979L1.98995 5.99999L5.94975 2.0402C6.22311 1.76683 6.22311 1.32361 5.94975 1.05025C5.67638 0.77688 5.23317 0.77688 4.9598 1.05025L0.505028 5.50502ZM67 5.3L1 5.29999L1 6.69999L67 6.7L67 5.3Z" fill="black"/>
            </svg>
          </a>
          <span>
            <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="11.6363" y1="0.291658" x2="0.636345" y2="24.2917" stroke="black" stroke-width="1.4"/>
            </svg>
          </span>
          <a href="#">
            <svg width="67" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.495 6.49498C66.7683 6.22161 66.7683 5.7784 66.495 5.50503L62.0402 1.05026C61.7668 0.776891 61.3236 0.776891 61.0503 1.05026C60.7769 1.32363 60.7769 1.76684 61.0503 2.04021L65.01 6.00001L61.0503 9.9598C60.7769 10.2332 60.7769 10.6764 61.0503 10.9498C61.3236 11.2231 61.7668 11.2231 62.0402 10.9498L66.495 6.49498ZM-6.11959e-08 6.7L66 6.70001L66 5.30001L6.11959e-08 5.3L-6.11959e-08 6.7Z" fill="black"/>
            </svg>
          </a>
        </div>
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