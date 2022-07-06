<template>
  <Heroproject
    skill1="Design System"
    skill2="Product design"
    skill3="Conception"
    skill4="Ui design"
    hero-img="pegase/pegase_hero.png"
    credit1="Armuet Thibaut "
    title-project="PEGASE"
  />
  <Briefsection
    text-brief="Le client avait besoin de concevoir un logiciel de gestion de la relation client qui regroupait l’ensemble des tâches de chaque service.  Il était donc important d’inclure des fonctionnalités à la fois commerciales, administratives, comptables et techniques/logistiques. Ainsi il a fallu faire un gros travail d’enquêtes et de recherches sur les besoins et contraintes de chaque département et pouvoir récolter les différents pains point de ces derniers. 
Après une phase de conception et de test utilisateurs, nous avons commencé avec l’équipe de développement à travailler sur les interfaces et les contraintes techniques qui en découlent. "
  />

  <Projectexplication
    top-img="pegase/pegase_wireframe.webp"
    bottom-img="pegase/pegase_ds.webp"
    title-section="Maintenir l’homogénéité"
    content-section="Au vu de la complexité des interfaces mais également de par le nombre différent d’écran en fonction des accès, il était important de mettre un design system complet. 
Orienté dans un esprit de design atomique ce dernier permet aux équipes de développement de gagner un temps précieux mais, dans le même temps permet une meilleure maintenabilité des interfaces et une homogénéité garantit."
  />

  <Imagesection
    link-picture-project2="pegase/pegase_desktop.webp"
    link-picture-project4="pegase/pegase_mobil.webp"
    link-picture-project3="pegase/pegase_interface.webp"
    link-picture-project1="pegase/pegase_design_system.webp"
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