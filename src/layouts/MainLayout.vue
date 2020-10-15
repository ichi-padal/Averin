<template>
  <div class="app-main-layout">
    <Header/>
    <Burger/>
<!--    <Navbar @click="isOpen = !isOpen" />-->

<!--    <Sidebar v-model="isOpen" />-->
    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Burger from "@/components/Burger";

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Header,
    Burger
  }
}
</script>
