<template>
  <div class="px-[7%] my-20 lg:my-72 xl:my-72 md:my-72 mb-40 lg:mb-80 xl:mb-80  md:mb-80 ">
    <Title
      span-content="Career"
      title-content="EXPÉRIENCES"
    />

    <article class="xl:mt-20 lg:mt-20 md:mt-14 sm:mt-8 mt-8 flex flex-row justify-between gap-14 xl:flex-nowrap	 lg:flex-wrap	 md:flex-wrap	  sm:flex-wrap  flex-wrap ">
      <img
        src="../images/about/experience.png"
        alt=""
      >
      <div>
        <Careercontent
          years="2021.2022"
          description="Conception, recherche et réalisation de site web et supports prints et réseaux sociaux, mais également conception design et maitiens de plusieurs produit web. Mise en place d’un design système servant au maintien du CRM en interne et maintiens de ce derniers tout au long du dévellopement.  "
          poste="product designer et DA junior  "
          layout="layout"
        />
        <Careercontent
          years="2019.2020"
          description="Chargé de la gestion des projets designs, marketings et logistiques.
Mise en place de stratégies design pour de l’aquisition de lead et création de contenu pour les réseaux sociaux"
          poste="Designer web junior "
        />
        <Careercontent
          years="2017.2019"
          description="Négociation, vente et gestion d’un portefeuille clients BtoC.
Prospection et mise en place d’action pour la gestion 
des dossiers clients. "
          poste="Télémarketeur & commercial terrain "
        />
      </div>
    </article>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Careercontent from '@/components/Careercontent.vue'

export default {
	components: { Title, Careercontent }
}
</script>

<style>

</style>