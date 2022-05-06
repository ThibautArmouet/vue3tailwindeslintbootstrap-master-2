<template>
  <div class="relative mb-16">
    <h2 class="relative text-white  z-20 text-4xl xl:text-7xl lg:text-7xl md:text-5xl sm:text-5xl">
      {{ titleContent }}
    </h2>
    <span class="absolute xl:-top-16 xl:left-28 lg:-top-16 lg:left-16 md:-top-8 md:left-16 sm:-top-8 sm:left-6 -top-8 left-0  text-white text-6xl xl:text-9xl lg:text-9xl md:text-7xl sm:text-7xl opacity-10 z-10">{{ spanContent }}</span>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    
    props:{
        titleContent:{
            type: String,
            require: true,
        },

          spanContent:{
            type: String,
            require: true,
        }

    }
}
</script>

<style>

</style>

