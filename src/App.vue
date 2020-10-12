<template>
  <div class="-in-site" id="app">
<!--    <Preloader/>-->
    <Header/>
    <Burger/>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
// import Preloader from "@/components/Preloader";
import Burger from "@/components/Burger";

export default {
  name: 'App',
  components: {
    Header,
    // Preloader,
    Burger
  }

}
</script>

<style lang="scss">



</style>
