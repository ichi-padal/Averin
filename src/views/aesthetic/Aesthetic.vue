<template>
  <MainNav :sliders="sliders"/>
</template>

<script>

import MainNav from "@/components/slider/MainNav";
export default {
name: "Aesthetic",
  components: {
    MainNav
  },
  data() {
    return {
      sliders: {
        slidersbg: [
          {backgroundPhoto: "woman_4.jpg"},
          {backgroundPhoto: "woman_2.jpg"},
          {backgroundPhoto: "woman_1.jpg"},
          {backgroundPhoto: "woman_3.jpg"},
        ],
        slidersnav: [
          {title: 'Balancing face and smile silhouette', url: '/balancingface', index: true},
          {title: '100 hours of silence and hand-crafting', url: '/handcrafting', index: true},
          {title: 'Perfection of the porcelain fit', url: '/perfection', index: true},
          {title: 'Before/after', url: '/before', index: true},
        ],
      }
    }
  }
}
</script>

<style lang="scss">

</style>