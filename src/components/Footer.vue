<template>
  <footer class="footer">
    <div class="copyright">© Copyright 2020</div>
    <a class="footer__link" href="#">follow us on facebook</a>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss">
footer.footer {
  background: $color-light-grey;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: $color-light-black;
  font-size: $h6-font-size;
  padding: 1.2rem;
  height: 3rem;
  z-index: 100;
}
.copyright {

}
.footer__link {
  color: $color-light-black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>