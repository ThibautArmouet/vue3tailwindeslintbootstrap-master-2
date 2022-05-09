<template>
  <div class="px-[7%] lg:py-72 xl:py-72 sm:py-40 py-40 ">
    <Title
      title-content="la demande client"
      span-content="Brief"
    />
    <p class="max-w-6xl mx-auto text-white text-xl lg:text-2xl  xl:text-2xl ">
      {{ textBrief }}
    </p>
  </div>
</template>

<script>
/* eslint-disable */
import Title from '@/components/Title.vue'
export default {
  components: { Title },
   
    props:{
        textBrief:{
            type: String,
            require: true,
        },

    }

}
</script>

<style>

</style>