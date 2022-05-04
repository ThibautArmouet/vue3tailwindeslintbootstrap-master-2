<template>
  <div class="px-[7%] z-40 relative "> 
      <Title Title_content="Get in touch" Span_content="contact"/>
      <h3 class="mb-14 text-2xl text-white text-['outer sans']">Par mail</h3>
      <h2 class="mb-24 text-4xl xl:text-8xl lg:text-7xl md:text-6xl mail text-[#B87D4B]">contact@thibautarmouet.fr</h2>
      <h3 class="mb-14 text-2xl text-white text-['outer sans']">Sur les réseaux sociaux</h3>
      <div class="flex flex-row gap-24">
          <Sociallink link="https://www.notion.so/Projet-Culture-Dig-1304882344dd4449a64fafd7124a22ac" sociallink="Dribbble"/>
          <Sociallink link="https://www.notion.so/Projet-Culture-Dig-1304882344dd4449a64fafd7124a22ac" sociallink="Behance"/>
          <Sociallink link="https://www.notion.so/Projet-Culture-Dig-1304882344dd4449a64fafd7124a22ac" sociallink="Linkedin"/>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import Title from '@/components/Title.vue'
import Sociallink from '@/components/sociallink.vue'
export default {
  components: { Title, Sociallink },

}
</script>

<style>

</style>