<template>
  <header>
    <h2>header</h2>
    <Video/>
  </header>
</template>

<script>
import Video from "@/components/Video";

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    Video
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
