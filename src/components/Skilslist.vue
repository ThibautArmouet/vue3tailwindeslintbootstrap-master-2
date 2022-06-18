<template>
  <div
    :id="border"
    class="py-6 xl:py-14 md:py-14 lg:py-14 border-t-[1px]"
  >
    <H3 class="text-xl text-white uppercase	">
      <span>{{ number }}</span> {{ skills }}
    </h3>
  </div>
</template>

<script>
export default {
	props:{
		number:{
			type: String,
			require: true,
		},

		skills:{
			type: String,
			require: true,
		},

		border:{
			type: String,
			require: false,
		}



	}
}
</script>

<style>

#border-bottom{
	border-bottom: 1px solid white;
}

</style>