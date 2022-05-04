<template>
  <div class="bg-[#04151F] w-screen h-fit bg-[url('/src/images/noise.png')] bg-contain z-10">
     <Cursor 
      :targets="['a',]"
      :circleColor="'#fff'"
      :circleColorHover="'#2f2f2f'"
      :dotColor="'#2f2f2f'"
      :dotColorHover="'lightgray'"
      :hoverSize="1.8" />
    <Header/>  
    <RouterView  class="z-40"/>
    <Elipse class="fixed bottom-[40%] left-[60%] z-0 "/>
    <Elipse class="fixed top-1/4 right-2/3 z-0"/>
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

