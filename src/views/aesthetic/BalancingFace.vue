<template>
  <div>
    <Title :TitlePage="TitlePage"/>

    <Quote :QuoteContent="QuoteContent"/>

    <PhotoText :PhotoTextContent="PhotoTextContent"/>

    <Gallery :Gallery="Gallery"/>

    <TextPhoto :PhotoTextContent="TextPhotoContent"/>

    <Button :ButtonTitle="ButtonTitle"/>
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
name: "BalancingFace",
  components: {TextPhoto, Title, Quote, PhotoText, Gallery, Button},
  data() {
    return {
      TitlePage: 'Balancing face and smile silhouette',
      PhotoTextContent: {
        HalfPhoto: {
          photoFile: 'woman_2.jpg',
          photoAlt: 'Photo one woman'
        },
        HalfText: {
          title: 'Balancing face and smile silhouette',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.'
        }
      },
      QuoteContent: {
        QuoteTitle: 'Intro',
        QuoteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="color-secondary"> Non a viverra varius sed urna, consequat ornare sagittis.</span> Lorem senectus ut non ac lacus facilisi nulla tincidunt.'
      },
      Gallery: {
        GalleryImg: ['woman_1.jpg', 'woman_2.jpg', 'woman_3.jpg', 'woman_4.jpg', 'woman_5.jpg', 'photo_2020-09-04_13-18-04.jpg']
      },
      TextPhotoContent: {
        HalfPhoto: {
          photoFile: 'woman_4.jpg',
          photoAlt: 'Photo one woman'
        },
        HalfText: {
          title: 'Balancing face qqqqqqqqqqq',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.'
        }
      },
      ButtonTitle: {
        title: 'all procedures',
        url: '/aesthetic'
      }
    }
  }
}

</script>

<style lang="scss">

</style>