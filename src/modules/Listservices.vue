<template>
  <div class="px-[7%] my-8 lg:my-20 xl:my-20 md:my-20 mb-16 lg:mb-40 xl:mb-40  md:mb-40 ">
    <skilslist
      number="01."
      skills="Product design"
    />
    <skilslist
      number="02."
      skills="BRAND DESIGN"
    />
    <skilslist
      number="03."
      skills="Ui/UX design web & mobil"
    />

    <skilslist
      number="04."
      skills="Développement Web"
    />

    <skilslist
      number="05."
      skills="Photographie"
      border="border-bottom"
    />
      
    <h3
      class="
      text-2xl
      lg:text-[32px]
      md:text-[32px]
      xl:text-[32px]
      sm:text-2xl
      max-w-sm
      text-white
      xl:leading-10
      lg:leading-10
      md:leading-10
    leading-10
    uppercase
    mt-8
    mb-4
      "
    >
      Skills
    </h3>
    <p class="text-xl lg:text-xl md:text-xl xl:text-xl sm:text-xl md:text-xl text-white  font-extralight leading-8		">
      Brand design   -  Motion design  -  Html CSS  - Vue Js  - Tailwind  -  Ui/Ux design  - Application mobile  -  Design produit   -  Design systeme  -  Figma  - XD - Sketch  -  Suite adobe 
      Photographie  -  Vidéo et photo édition  -  Prototypage  -  Gestion de projet
    </p>
  </div>
</template>

<script>
import Skilslist from '@/components/Skilslist.vue'
export default {
	components: { Skilslist },

}
</script>

<style>

</style>