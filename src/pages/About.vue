<template>
  <div class="pt-32 relative z-50">
    <H1 class=" text-3xl sm:text-7xl lg:text-8xl  md:text-7xl xl:text-9xl mb-6 xl:mb-14 lg:mb-14 ">
      Designer web<br><span id="stroke">passionné</span>
    </H1>
    <img
      class="px-[7%]"
      src="../images/about/hero.png"
      alt=""
    >
    <Section1About />
    <Title
      title-content="Mes services"
      span-content="SkilLs"
      class="px-[7%]"
    />
    <Listservices1 />
    <Sectioncarrer />
    <Section3 />
    <Footer />
  </div>
</template>

<script>
import Section1About from '@/modules/Section-1-about.vue'
import Title from '@/components/Title.vue'
import Section3 from '@/modules/Section3.vue'
import Footer from '@/modules/Footer.vue'
import Listservices1 from '@/modules/Listservices.vue'
import Sectioncarrer from '@/modules/Sectioncarrer.vue'

export default {
	components: { Section1About, Title, Section3, Footer, Listservices1, Sectioncarrer }
}
</script>

<style>

</style>