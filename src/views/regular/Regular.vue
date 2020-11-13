<template>
  <MainNav :sliders="sliders"/>
</template>

<script>
import MainNav from "@/components/slider/MainNav";
export default {
name: "Regular",
  components: {MainNav},
  data() {
    return {
      sliders: {
        slidersbg: [
          {backgroundPhoto: "woman_1.jpg"},
          {backgroundPhoto: "woman_2.jpg"},
          {backgroundPhoto: "woman_4.jpg"},
          {backgroundPhoto: "woman_3.jpg"},
          {backgroundPhoto: "woman_1.jpg"},
          {backgroundPhoto: "woman_2.jpg"},
          {backgroundPhoto: "woman_3.jpg"},
        ],
        slidersnav: [
          {title: 'Hygiene', url: '/hygiene', index: true},
          {title: 'Perio-therapy', url: '/periotherapy', index: true},
          {title: 'Restoration', url: '/restoration', index: true},
          {title: 'Implants', url: '/implants', index: true},
          {title: 'Sleep dentistry', url: '/sleepdentistry', index: true},
          {title: 'Endo therapy', url: '/endotherapy', index: true},
          {title: 'Invisalign', url: '/invisalign', index: true},
        ],
      }
    }
  }
}
</script>

<style lang="scss">

</style>