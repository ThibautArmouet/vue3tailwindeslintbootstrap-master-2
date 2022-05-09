<template>
  <article class="mx-auto w-[90%]  xl:w-[80%] lg:w-[80%] md:w-[90%] sm:w-[90%] lg:py-72 xl:py-72 sm:py-40 py-40 ">
    <aos-vue animation="fade-down">
      <img
        :src="require(`../images/${linkPictureProject1}`)"
        alt=""
      >
    </aos-vue>
    <aos-vue animation="fade-down">
      <img
        :src="require(`../images/${linkPictureProject2}`)"
        alt=""
        class="my-7 xl:my-14 lg:my-14 md:my-8 sm:my-7"
      >
    </aos-vue>
    <aos-vue
      animation="fade-down"
      class="justify-self-stretch"
    >
      <div class=" auto-cols-auto grid gap-7 sm:gap-7 md:gap-8 xl:gap-14 lg:gap-14  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <img
          :src="require(`../images/${linkPictureProject3}`)"
          alt=""
          class="object-cover w-[100%] h-[100%]"
        > 
     
     
        <img
          :src="require(`../images/${linkPictureProject4}`)"
          alt=""
          class=" w-[110%]	ml-0 mr-0"
        >
      </div>
    </aos-vue>
  </article>
</template>

<script>
export default {
  
	props:{

		linkPictureProject1:{
			type: String,
			required: true,
		},
		linkPictureProject2:{
			type: String,
			required: true,
		},
		linkPictureProject3:{
			type: String,
			required: true,
		},
		linkPictureProject4:{
			type: String,
			required: true,
		},
	}

}
</script>

<style>

</style>