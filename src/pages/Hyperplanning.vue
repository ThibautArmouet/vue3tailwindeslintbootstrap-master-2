<template>
  <Heroproject
    skill1="Ui design"
    skill2="Design System"
    skill3="Branding"
    skill4="Product design"
    hero-img="hyperplanning/hyperplanning_hero.jpg"
    credit1="Tinon Camille"
    credit2="Armuet Thibaut"
    credit3="Andre Charlotte"
    credit4="Marie "
    title-project="Hyperplanning"
  />
  <Briefsection
    text-brief="Hyperplanning est une solution proposé aux institutions éducatives permettant la gestion des plannings étudiants et professeurs, les échanges documentaires, le suivi de notes et absences. 
Dans le cadre d’une étude produit, nous avions pour missions d’effectuer une refonte graphique, mais surtout une remise en question de la conception, afin d’apporter une utilisation plus ergonomique, plus fluide et plus simple. Voici comment nous avons pu proposer une nouvelle vision produit, plus chaleureuse et permettant de centraliser les besoins des étudiants "
  />

  <Projectexplication
    top-img="hyperplanning/hyper_existant.jpg"
    bottom-img="hyperplanning/hyper_ds.jpg"
    title-section="Design system"
    content-section="Le design produit s’oppose au design créatif de par ses contraintes technique dû à la diversité des utilisateurs, mais également dut à la récurrence de son utilisation.
De ce fait, il est important, pour une meilleure maintenabilité des interfaces, de mettre en place un design system complet présentant à la fois des éléments et leurs états (bouton, sélect, drop down, etc.) mais également les différents tests de contrastes et d’accessibilité permettant aux différents acteurs du produit de suivre les mêmes normes et ainsi maintenir une certaine homogénéité et cohérence."
  />

  <Imagesection
    link-picture-project2="hyperplanning/hyper_video.jpg"
    link-picture-project4="hyperplanning/hyper_affiche.jpg"
    link-picture-project3="hyperplanning/hyper_interface.jpg"
    link-picture-project1="hyperplanning/hyper_brand.jpg"
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