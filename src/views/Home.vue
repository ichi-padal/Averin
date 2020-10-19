<template>
  <div>
    <Preloader/>
    <LoaderClick/>
    <Video/>
  </div>
</template>

<script>
// @ is an alias to /src
import Preloader from "@/components/Preloader";
import LoaderClick from "@/components/LoaderClick";
import Video from "@/components/header/chunks/Video";

export default {
  name: 'Home',
  components: {
    Video,
    LoaderClick,
    Preloader
  }
}
</script>
