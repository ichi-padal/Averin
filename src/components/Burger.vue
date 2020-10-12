<template>
  <div class="burger">
    <nav>
      <h2>Menu</h2>
      <ul class="menu">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Safety etiquette</a></li>
        <li><a href="#">Сontacts</a></li>
      </ul>
    </nav>
    <div>
      <h3>Aesthetic dentistry</h3>
      <ul>
        <li><a href="#">Balancing face and smile silhouette</a></li>
        <li><a href="#">100 hours of silence and hand-crafting</a></li>
        <li><a href="#">Perfection of the porcelain fit</a></li>
        <li><a href="#">Before/after</a></li>
      </ul>
      <h3>Regular dentistry</h3>
      <ul>
        <li><a href="#">Hygiene</a></li>
        <li><a href="#">Perio-therapy</a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
name: "Burger"
}
const menu_links = ['About Us', 'Safety etiquette', 'Сontacts'];
</script>

<style lang="scss">
.burger {
  display: none;
  background: $bg-black;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  &__header {
    display: flex;
  }
}
</style>