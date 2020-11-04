<template>
  <picture>
    <source type="image/webp" media="(min-width: 1150px)" srcset="img/photo-hare-desktop@1x.webp 1x, img/photo-hare-desktop@2x.webp 2x">
    <source type="image/webp" media="(min-width: 768px)" srcset="img/photo-hare-tablet@1x.webp 1x, img/photo-hare-tablet@2x.webp 2x">
    <source type="image/webp" srcset="img/photo-hare-mobile@1x.webp 1x, img/photo-hare-mobile@2x.webp 2x">
    <source media="(min-width: 1150px)" srcset="img/photo-hare-desktop@1x.jpg 1x, img/photo-hare-desktop@2x.jpg 2x">
    <source media="(min-width: 768px)" srcset="img/photo-hare-tablet@1x.jpg 1x, img/photo-hare-tablet@2x.jpg 2x">
    <img class="product-card__image" src="img/photo-hare-mobile@1x.jpg" srcset="img/photo-hare-mobile@2x.jpg 2x" width="260" height="195" alt="Фотография товара - Зайчик-попрыгайчик">


    <source srcset="~@/src/assets/img/photo/woman_3.jpg" media="(max-width: 576px)">
    <source srcset="../assets/img/photo/woman_3.jpg" media="(max-width: 1366px)">
    <img src="../assets/img/photo/woman_6.jpg" alt="Photo">
  </picture>
</template>

<script>
export default {
name: "Picture"
}
</script>

<style scoped>

</style>