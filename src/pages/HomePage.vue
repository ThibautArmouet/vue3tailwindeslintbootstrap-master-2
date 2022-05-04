<template>
  <div class="z-40">
    <Hero/>
    <Section1/>
    <Containercaroussel/>
    <Section3/>
    <Footer/>
    
    
  </div>
</template>

<script>
/* eslint-disable */
  import Hero from '@/components/Hero.vue'
  import Section1 from '@/modules/Section1.vue'
  import Containercaroussel from '@/modules/Containercaroussel.vue'
  import Section3 from '@/modules/Section3.vue'
import Footer from '@/modules/Footer.vue'

  export default {
    components: {Hero, Section1, Containercaroussel, Section3, Footer, },
  }
</script>

<style >

</style>
