<template>
  <div class=" px-[7%] relative z-50">
    <Title
      title-content="Créons ensembles"
      span-content="about"
    />
    <div class="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-6 xl:gap-40 lg:gap-20 md:gap-6 sm:gap-4  pl-16 pr-44">
      <article class="flex flex-row xl:flex-col lg:flex-col md:flex-row sm:flex-row gap-6">
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
      </article>
      <P class="columns-1 sm:columns-1 md:columns-1 lg:columns-2 xl:columns-2  text-white text-2xl xl:min-w-[700px] lg:min-w-[700px] md:min-w-[500px] min-w-[400px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </P>
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
