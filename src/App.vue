<template>
  <div class="bg-[#04151F] w-screen h-fit bg-[url('/src/images/noise.png')] bg-contain z-10">
    <Cursor 
      :targets="['a','li','mail',]"
      :circle-color="'#fff'"
      :circle-color-hover="'#B87D4'"
      :dot-color="'#FFFF'"
      :dot-color-hover="'#B87D4'"
      :hover-size="1.8"
    />
    <Header />  
   
    <RouterView v-slot="{Component, route}">
      <transition
        mode="out-in"
        enter-active-class="transition duration-1000"
        enter-from-class="opacity-0 -translate-y-6 "
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-1000"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-6"
      >
        <div :key="route.name">
          <component
            :is="Component"
          />
        </div>
      </transition>
    </RouterView>
     

 
    <Elipse class="fixed bottom-[40%] left-[60%] z-0 " />
    <Elipse class="fixed top-1/4 right-2/3 z-0" />
  </div>
</template>

<script>

/* eslint-disable */ 
import Cursor from './components/Cursor.vue'
import Elipse from './components/Elipse.vue'
import Header from './components/Header.vue'

export default {
	name: 'App',
  components: {Header, Elipse, Cursor,},
}

</script>

<style>

 @import './css/font.css';
 

</style>

