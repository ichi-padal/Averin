<template>
  <div>
    <Title :TitlePage="TitlePage"/>

    <Quote :QuoteContent="QuoteContent"/>

    <PhotoText :PhotoTextContent="PhotoTextContent"/>

    <Gallery/>

    <TextPhoto :PhotoTextContent="TextPhotoContent"/>

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
name: "HandCrafting",
  components: {TextPhoto, Title, Quote, PhotoText, Gallery, Button},
  data() {
    return {
      TitlePage: '100 hours of silence and hand-crafting',
      PhotoTextContent: {
        HalfPhoto: {
          photoFile: 'woman_3.jpg',
          photoAlt: 'Photo one woman'
        },
        HalfText: {
          title: '100 hours of silence and hand-crafting',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.'
        }
      },
      QuoteContent: {
        QuoteTitle: 'Intro',
        QuoteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non a viverra varius sed urna, consequat ornare sagittis.'
      },
      TextPhotoContent: {
        HalfPhoto: {
          photoFile: 'woman_1.jpg',
          photoAlt: 'Photo one woman'
        },
        HalfText: {
          title: '111111111111 222222222222222 333333333333333333334 44444444444',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.'
        }
      },
    }
  }
}

</script>

<style lang="scss">

</style>