<template>
  <article
    :id="layout"
    class="py-14 border-b-[1px] border-[#818789] xl:max-w-2xl max-w-[100%]"
  >
    <div class=" flex flex-row gap-6 items-end mb-6	">
      <span class="years text-[#818789]">{{ years }}</span>
      <h4 class="text-lg xl:text-xl lg:text-xl md:text-lg uppercase text-white ">
        {{ poste }}
      </h4>
    </div>
    <p class="text-lg text-white">
      {{ description }}
    </p> 
  </article>
</template>

<script>
export default {
	props:{
		years:{
			type: String,
			require: true,
		},

		poste:{
			type: String,
			require: true,
		},

		description:{
			type: String,
			require: false,
		},

		layout:{
			type: String,
			require: false,
		}



	}
}
</script>

<style>

#layout{
    padding-top: 0px;
}

</style>