<template>
  <div ref="box" id="app" class="-in">
    <component :is="layout">
      <router-view/>
    </component>
    <div ref="circle" class="circle"></div>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import SliderLayout from "@/layouts/SliderLayout";
import {gsap} from "gsap/all";

// import { TimelineLite, Back } from 'gsap'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout, SliderLayout
  },
  mounted() {

    const circle = this.$refs.circle;

    gsap.set(circle, { xPercent: -50, yPercent: -50 });

    var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    var mouse = { x: pos.x, y: pos.y };
    var speed = 0.3;

    var fpms = 60 / 1000;

    var xSet = gsap.quickSetter(circle, "x", "px");
    var ySet = gsap.quickSetter(circle, "y", "px");

    window.addEventListener("mousemove", e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add((time, deltaTime) => {
      var delta = deltaTime * fpms;
      var dt = 1.0 - Math.pow(1.0 - speed, delta);

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  },

  methods: {}

}
</script>

<style lang="scss">
@import "assets/styles/app";


.circle {
  position: fixed;
  height: 2rem;
  width: 2rem;
  pointer-events: none;
  border-radius: 50%;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  opacity: 1;
  border: 1px solid #e7e7e7;
  background: aliceblue;
  z-index: 12000;
  -webkit-transform: translate(-100%,-100%);
  transform: translate(-100%,-100%);
  -webkit-transition: opacity 1s linear,background-color .2s,width .1s linear,height .1s linear,top .1s linear,left .1s linear,-webkit-transform .05s linear;
  transition: opacity 1s linear,background-color .2s,width .1s linear,height .1s linear,top .1s linear,left .1s linear,-webkit-transform .05s linear;
  transition: transform .05s linear,opacity 1s linear,background-color .2s,width .1s linear,height .1s linear,top .1s linear,left .1s linear;
  transition: transform .05s linear,opacity 1s linear,background-color .2s,width .1s linear,height .1s linear,top .1s linear,left .1s linear,-webkit-transform .05s linear;
  -webkit-transform-origin: center;
  transform-origin: center;
  @media (max-width: $breakpoints-max-mobile) {
    display: none;
  }
}



</style>