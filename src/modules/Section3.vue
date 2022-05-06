<template>
  <div class="px-[7%] z-40 relative "> 
    <Title
      title-content="Get in touch"
      span-content="contact"
    />
    <h3 class="mb-14 text-2xl text-white text-['outer sans']">
      Par mail
    </h3>
    <h2 class=" mail mb-24 text-3xl xl:text-8xl lg:text-7xl md:text-6xl text-[#B87D4B] hover:scale-95 hover:origin-left duration-300 transition-scale hover:tracking-wide	">
      contact@thibautarmouet.fr
    </h2>
    <h3 class="mb-14 text-2xl text-white text-['outer sans']">
      Sur les réseaux sociaux
    </h3>
    <div class="flex flex-row gap-8 xl:gap-24 lg:gap-24">
      <Sociallink
        link="https://dribbble.com/thibaut_rt"
        sociallink="Dribbble"
      />
      <Sociallink
        link="https://www.behance.net/thibautarmouet"
        sociallink="Behance"
      />
      <Sociallink
        link="https://www.linkedin.com/in/thibaut-armouet-678196137/"
        sociallink="Linkedin"
      />
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