<template>
  <section  class="section__pages section__intro">
    <blockquote class="quote animate_up">
      <h4 v-scrollanimation class="quote__intro">{{QuoteContent.QuoteTitle}}</h4>
      <p v-scrollanimation v-html="QuoteContent.QuoteText">
      </p>
    </blockquote>
  </section>
</template>

<script>


export default {
name: "Quote",
  props: {
    QuoteContent: {
      QuoteTitle: {
        default: 'Title undefined'
      },
      QuoteText: {
        default: 'text undefined'
      },
    }
  },
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
    font-family: $title-font-family;
  }
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>