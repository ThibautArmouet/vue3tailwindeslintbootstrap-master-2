<template>
  <section class=" relative z-10  items-center	top-0 mt-[-100px] grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
    <div>
      <img
        
        :src="require(`../images/${heroImg}`)"
        alt=""
        class=" w-[90%] m-auto xl:w-[100%] xl:m-0 lg:w-[100%] lg:m-0 md:w-[90%] sm:w-[90%] sm:m-auto md:m-auto"
      >
    </div>
       
        
    <article class="text-white px-9 mt-10 xl:mt-0 lg:mt-0 sm:px-12 md:px-12 lg:px-0 xl:px-0">
      <div class="xl:relative lg:relative xl:pr-[4%] xl:w-[90%] xl:h-20 lg:pr-[4%] lg:w-[90%] lg:h-20">
        <h1 class=" p-0 text-3xl text-left sm:text-left	 md:text-left	 xl:absolute xl:right-0 lg:absolute lg:right-0 xl:text-8xl lg:text-8xl md:text-6xl sm:text-4xl">
          {{ titleProject }}
        </h1>
      </div>
      
      <div class=" mt-4 xl:mt-12 lg:mt-12 xl:w-[80%] lg:w-[80%] w-[100%] grid grid-cols-2">
        <div class="text-white justify-self-start xl:justify-self-end lg:justify-self-end">
          <span class="span_project">Services</span>
          <ul class="text-white text-base mt-3">
            <li>{{ skill1 }}</li>
            <li>{{ skill2 }}</li>
            <li>{{ skill3 }}</li>
            <li>{{ skill4 }}</li>
          </ul>
        </div>
        <div class="justify-self-start xl:justify-self-end lg:justify-self-end">
          <span class="span_project">Crédit </span>
          <ul class="text-white text-base mt-3">
            <li>{{ credit1 }}</li>
            <li>{{ credit2 }}</li>
            <li>{{ credit3 }}</li>
            <li>{{ credit4 }}</li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {

	props:{

		skill1:{
			type: String,
			require: true,
		},

		skill2:{
			type: String,
			require: true,
		},

		skill3:{
			type: String,
			require: true,
		},

		skill4:{
			type: String,
			require: true,
		},
		credit1:{
			type: String,
			require: true,
		},

		credit2:{
			type: String,
			require: true,
		},

		credit3:{
			type: String,
			require: true,
		},

		credit4:{
			type: String,
			require: true,
		},
		heroImg:{
			type: String,
			required: true,
		},

		titleProject:{
			type: String,
			required: true,
		},

	}

}
</script>

<style>

</style>