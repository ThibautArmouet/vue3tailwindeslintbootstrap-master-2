<template>
  <router-link :to="linkProject">
    <article class="  flex xl:items-end lg:items-end md:items-start sm:items-start xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-0 xl:gap-6 lg:gap-6 md:gap-6 sm:gap-0 xl:pb-20 lg:pb-20 md:pb-10 sm:pb-10 pb-8 ] ">
      <h2 class="outlin text-white text-3xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl transition-all hover:pl-[5%]">
        {{ titleProject }}
      </h2>
    
      <svg
        class=" hidden xl:block lg:block  md:hidden  sm:hidden "
        width="2"
        height="60"
        viewBox="0 0 2 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.18274 111.022V0.978516"
          stroke="#FFFCFF"
          stroke-width="1.27957"
        />
      </svg>
      <ul class="text-white flex flex-row xl:flex-col lg:flex-col md:flex-row sm:flex-row sm:gap-6 md:gap-4 gap-4 xl:gap-0 lg:gap-0">
        <li>{{ skils1 }}</li>
        <li>{{ skils2 }}</li>
        <li>{{ skils3 }}</li>
      </ul>
    </article>
  </router-link>
</template>

<script>
export default {
	props:{

		titleProject:{
			type: String,
			require: true,
		},

		skils1:{
			type: String,
			require: true,
		},

		skils2:{
			type: String,
			require: true,
		},

		skils3:{
			type: String,
			require: true,
		},
		imagePojectlist:{
			type: String,
			require: true,
		},

		linkProject:{
			type: String,
			require: true,
		},

		
	}

}
</script>

<style>

</style>