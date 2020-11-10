<template>
  <div>
    <Title :TitlePage="TitlePage"/>

    <TextPhoto  :PhotoTextContent="TextPhotoContent"/>

    <Button :ButtonTitle="ButtonTitle"/>
  </div>
</template>

<script>
import Button from "@/components/pages/Button";
import Title from "@/components/pages/Title";
import TextPhoto from "@/components/pages/TextPhoto";

export default {
  name: "Safety",
  components: {TextPhoto, Title, Button},
  data() {
    return {
      TitlePage: 'Safety etiquette',
      TextPhotoContent: {
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