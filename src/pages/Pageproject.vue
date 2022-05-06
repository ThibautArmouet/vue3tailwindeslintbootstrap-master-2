<template>
  <Heroproject />
  <Briefsection
    text-brief="Lors d’une compétition scolaire, nous avons était amené à travailler sur la problématique suivante : “ Comment démocratiser la diversité culturelle des spectacles vivants via le biais du digital et ceux sans algorithme ? ”.
Ainsi nous avons chercher à en comprendre les contraintes  ( images veillissante, manque de communication etc.) afin de proposer des solutions globales et redynamiser ce secteur en perte de vitesse. 
Le but étant de fédérer une communauté active d’utilisateur qui alimenterons eux même la communication des spectacle et ainsi partager et faire découvrir de nouveaux artistes.   "
  />

  <Projectexplication />

  <Imagesection
    link-picture-project2="kult/Kult_video_inter.jpg"
    link-picture-project4="kult/Kult_print.jpg"
    link-picture-project3="kult/kult_interface_mobil.jpg"
    link-picture-project1="kult/Kult_brand.jpg"
  />
  <Section3 />
  <Footer />
</template>

<script>
/* eslint-disable */
import Footer from '@/modules/Footer.vue'
import Section3 from '@/modules/Section3.vue'
import Briefsection from '@/modules/Briefsection.vue'
import Imagesection from '@/modules/Imagesection.vue'
import Projectexplication from '@/modules/Projectexplication.vue'
import Heroproject from '@/modules/Heroproject.vue'



export default {
  components: { Footer, Section3, Briefsection, Imagesection, Projectexplication, Heroproject,  },

}
</script>

<style>

template{
  overflow-x: hidden;
}

</style>