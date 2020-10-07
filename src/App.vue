<template>
  <div id="app">
    <Preloader/>

    <div>
      <h1>PIDOR, GET WORK!</h1>
    </div>
    <Header/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";

export default {
  name: 'App',
  components: {
    Header,
    Preloader
  }

}
</script>

<style>

body {
  color: aliceblue;
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

</style>
