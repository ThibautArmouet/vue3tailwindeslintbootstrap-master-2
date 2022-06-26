<template>
  <Heroproject
    skill1="Ui design"
    skill2="Motion design"
    skill3="Branding"
    skill4="Graphisme"
    hero-img="waikiki/waikiki_hero.png"
    credit1="Armuet Thibaut"
   
    title-project="The Waikiki"
  />
  <Briefsection
    text-brief="Dans les années 80/90 Waikiki était devenu la marque incontournable des plus jeunes. Reconnaissable par son personnage et son logo, la marque avait séduit les jeunes générations. Petit à petit, la mode évoluant, le déclin de WAIKIKI en France a fait disparaître cette icône, devenu un magasin généraliste en Turquie. L’objectif ? Faire renaître la marque en la positionnant comme une marque de streetwear haut de gamme en s’inspirant des codes actuels tout en créant une figure marquée et marquante."
  />

  <Projectexplication
    top-img="waikiki/waikiki_logo.gif"
    bottom-img="waikiki/Waikiki_interface.png"
    title-section="Une meilleur expérience  "
    content-section="Afin d’améliorer le customer expérience de nos utilisateurs, il était important d’apporter une plus-value. Ainsi, la personnalisation des articles et des vêtements a été mise en place. L’utilisateur peut ainsi profiter de produit “standard” mais garde le choix d’entièrement personnaliser un sweat en changeant la couleur ou les matériaux de chaque élément. "
  />

  <Imagesection
    link-picture-project2="waikiki/waikiki_video.png"
    link-picture-project4="waikiki/waikiki_card.png"
    link-picture-project3="waikiki/waikiki_box.png"
    link-picture-project1="waikiki/waikiki_brand.png"
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