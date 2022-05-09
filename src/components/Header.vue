<template>
  <div class="flex justify-between flex-row xl:px-24 lg:px-24 px-[9%] xl:pt-11 lg:pt-11 pt-8 relative z-30">
    <router-link to="/">
      <img
        src="../images/logo.png"
        alt=""
        class="w-[50%] lg:w-full xl:w-full"
      >
    </router-link>
    <nav class="text-white">
      <router-link to="/projets">
        <span class="mr-12 nav"> projets</span>
      </router-link>
      <router-link to="/hyperplanning">
        <span class="nav">à propos</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>