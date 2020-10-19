<template>
  <section class="section__pages section__photo-text">
    <HalfText/>
    <HalfPhoto class=""/>
  </section>
</template>

<script>
import HalfPhoto from "@/components/pages/chunks/HalfPhoto";
import HalfText from "@/components/pages/chunks/HalfText";
export default {
name: "TextPhoto",
  components: {HalfText, HalfPhoto}
}
</script>

<style lang="scss">

</style>