<template>
  <div>
    <Title/>

    <Quote/>

    <PhotoText/>

    <Gallery/>

    <TextPhoto/>

    <Button/>
  </div>
</template>

<script>
import Button from "@/components/pages/Button";
import Gallery from "@/components/pages/Gallery";
import PhotoText from "@/components/pages/PhotoText";
import Quote from "@/components/pages/Quote";
import Title from "@/components/pages/Title";
import TextPhoto from "@/components/pages/TextPhoto";

export default {
  name: "Safety",
  components: {TextPhoto, Title, Quote, PhotoText, Gallery, Button},
}

</script>

<style lang="scss">

</style>