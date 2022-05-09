<template>
  <Heroproject
    skill1="Ui design"
    skill2="motion design"
    skill3="Branding"
    skill4="Color"
    hero-img="kult/kult_hero.jpg"
    credit1="Dejanty Julie"
    credit2="Armuet Thibaut"
    credit3="Peynot Lauriane"
    credit4="Perera Manon"
    title-project="Hackathon"
  />
  <Briefsection
    text-brief="Lors d’une compétition scolaire, nous avons était amené à travailler sur la problématique suivante : “ Comment démocratiser la diversité culturelle des spectacles vivants via le biais du digital et ceux sans algorithme ? ”.
Ainsi nous avons chercher à en comprendre les contraintes  ( images veillissante, manque de communication etc.) afin de proposer des solutions globales et redynamiser ce secteur en perte de vitesse. 
Le but étant de fédérer une communauté active d’utilisateur qui alimenterons eux même la communication des spectacle et ainsi partager et faire découvrir de nouveaux artistes.   "
  />

  <Projectexplication
    top-img="kult/Kult_logo.png"
    bottom-img="kult/Kult_Commu.png"
    title-section="Une  communauté active"
    content-section="Plus qu’un agenda ulturel, Kult s’inscrit comme une réelle plateforme regroupant 3 besoins spécifiques. 
            Dans un premier temps l’application vous permet de découvrir les spectacle vivant autour de vous avec pour seul critère de classification la distance avec l’utilisateur. Nous avons aussi réfléchit à ajouter un canal de réservation de places de spectacles et stockage de vos billets. 
            Pour finir un réseaux sociale viens compléter le tout en permettant de créer une communauté autout du spectacle vivant et ceux , avant le spectacle, pendant le spectacle et pour finir sur après le spectacle."
  />

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