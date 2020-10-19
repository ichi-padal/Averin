<template>
  <div ref="box" id="app" class="-in">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import SliderLayout from "@/layouts/SliderLayout";
// import { TimelineLite, Back } from 'gsap'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout, SliderLayout
  }
}
</script>

<style lang="scss">

</style>