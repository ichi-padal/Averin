<template>
  <div>
    <Title :TitlePage="TitlePage"/>

    <Quote :QuoteContent="QuoteContent"/>

    <PhotoText :PhotoTextContent="PhotoTextContent"/>

    <Gallery :Gallery="Gallery"/>

    <Button :ButtonTitle="ButtonTitle"/>
  </div>
</template>

<script>
import Button from "@/components/pages/Button";
import Gallery from "@/components/pages/Gallery";
import PhotoText from "@/components/pages/PhotoText";
import Quote from "@/components/pages/Quote";
import Title from "@/components/pages/Title";

export default {
name: "Perfection",
  components: {Title, Quote, PhotoText, Gallery, Button},
  data() {
    return {
      TitlePage: 'Perfection of the porcelain fit',
      PhotoTextContent: {
        HalfPhoto: {
          photoFile: 'woman_5.jpg',
          photoAlt: 'Photo one woman'
        },
        HalfText: {
          title: 'Perfection of the porcelain fit',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.'
        }
      },
      QuoteContent: {
        QuoteTitle: 'Intro',
        QuoteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non a viverra varius sed urna, consequat ornare sagittis.'
      },
      Gallery: {
        title: 'Gallery',
        GalleryImg: [
          {fileName: 'woman_1.jpg', alt: 'photo woman 1'},
          {fileName: 'woman_2.jpg', alt: 'photo woman 2'},
        ]
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