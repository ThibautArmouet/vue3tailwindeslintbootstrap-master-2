<template>
  <div class=" px-[7%] relative z-50">
    <Title
      title-content="Créons ensembles"
      span-content="about"
    />
    <div class="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-6 xl:gap-40 lg:gap-20 md:gap-6 sm:gap-4  lg:pl-16 xl:pl-16 pl-[4%] pr-44">
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
      <P class="columns-1 sm:columns-1 md:columns-1 lg:columns-2 xl:columns-2  text-white text-2xl xl:min-w-[700px] lg:min-w-[700px] md:min-w-[500px] min-w-[300px]">
        Directeur artistique et designer produit junior, je crée des expériences engageantes pour vos utilisateurs tout en mettant au centre de ma conception ces derniers. Véritable épicurien curieux, je crois que l'inclusion et l'accessibilité sont essentielles au progrès de la conception et impératives au processus UX.<br>Mes compétences en intégration front-end me permet de comprendre les besoins et enjeux du développement et ainsi soit vous proposez une intégration front-end, soit communiqué avec efficience avec vos équipes de développement..
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
