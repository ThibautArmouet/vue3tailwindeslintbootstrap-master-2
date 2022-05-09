<template>
  <section class="xl:mb-72 lg:mb-72 md:mb-32 sm:mb-20 mb-20">
    <article class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb-28 ">
      <aos-vue animation="fade-right">
        <img
          :src="require(`../images/${topImg}`)"
          alt=""
          class=" w-[90%] h-auto xl:w-[100%] lg:w-[100%] md:w-[90%] sm:w-[90%] m-auto"
        >
      </aos-vue>
    </article>
    <article class="grid  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <aos-vue
        animation="fade-right"
        class=" m-auto w-full "
      >
        <div class="max-w-2xl m-auto p-[5%] text-white">
          <h2 class="text-3xl mb-8">
            {{ titleSection }}
          </h2>
          <p class=" max-w-lg">
            {{ contentSection }}
          </p>
        </div>
      </aos-vue>
      <aos-vue animation="fade-left">
        <img
        
          :src="require(`../images/${bottomImg}`)"
          alt=""
          class=" w-[90%] h-auto xl:w-[100%] lg:w-[100%] md:w-[90%] sm:w-[90%] m-auto"
        >
      </aos-vue>
    </article>
  </section>
</template>

<script>
export default {
	props:{

		topImg:{
			type: String,
			require: true,
		},

		bottomImg:{
			type: String,
			require: true,
		},

		titleSection:{
			type: String,
			require: true,
		},

		contentSection:{
			type: String,
			require: true,
		},



	

	}
}
</script>

<style>

</style>