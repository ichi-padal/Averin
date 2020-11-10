<template>
  <div>
    <Title :TitlePage="TitlePage"/>

    <TextPhoto  :PhotoTextContent="TextPhotoContentDoctors"/>

    <Gallery :Gallery="Doctors"/>

    <TextPhoto :PhotoTextContent="TextPhotoContentClinic"/>

    <Gallery :Gallery="Clinic"/>

    <Button :ButtonTitle="ButtonTitle"/>
  </div>
</template>

<script>
import Button from "@/components/pages/Button";
import Gallery from "@/components/pages/Gallery";
import Title from "@/components/pages/Title";
import TextPhoto from "@/components/pages/TextPhoto";

export default {
  name: "Safety",
  components: {TextPhoto, Title, Gallery, Button},
  data() {
    return {
      TitlePage: 'about us',
      TextPhotoContentDoctors: {
        HalfPhoto: {
          photoFileMobile: 'woman_4',
          photoFile: 'woman_4',
          photoAlt: 'Photo one woman'
        },
        HalfText: {
          isGrey: true,
          title: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.'
        }
      },
      Doctors: {
        title: 'Doctors',
        GalleryImg: [
          {fileName: 'woman_1.jpg', alt: 'photo woman 1'},
          {fileName: 'woman_2.jpg', alt: 'photo woman 2'},
          {fileName: 'woman_3.jpg', alt: 'photo woman 3'},
          {fileName: 'woman_4.jpg', alt: 'photo woman 4'},
          {fileName: 'woman_6.jpg', alt: 'photo woman 5'},
        ]
      },
      TextPhotoContentClinic: {
        HalfPhoto: {
          photoFileMobile: 'woman_2',
          photoFile: 'woman_2',
          photoAlt: 'Photo one woman'
        },
        HalfText: {
          isGrey: true,
          title: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ultricies neque, sagittis tincidunt fermentum habitant nulla. Quam mi at purus platea. Tellus, dui, sed blandit id eu, volutpat risus aliquam. Morbi tincidunt mollis vulputate elit. Pulvinar vitae, quam amet amet. Eget vitae placerat elit est, viverra nunc cras. Sed pretium lectus duis ultricies.'
        }
      },
      Clinic: {
        title: 'Clinic',
        GalleryImg: [
          {fileName: 'woman_1.jpg', alt: 'photo woman 1'},
          {fileName: 'woman_2.jpg', alt: 'photo woman 2'},
          {fileName: 'woman_3.jpg', alt: 'photo woman 3'},
          {fileName: 'woman_4.jpg', alt: 'photo woman 4'},
          {fileName: 'woman_6.jpg', alt: 'photo woman 5'},
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