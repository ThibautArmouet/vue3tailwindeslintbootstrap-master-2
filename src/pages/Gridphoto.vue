<template>
  <div>
    <div class="parent px-[6%] mt-32  ">
      <div class="div1">
        <img
          src="../images/photos/2.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div2">
        <img
          src="../images/photos/DSC00273.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div3">
        <img
          src="../images/photos/4.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div4">
        <img
          src="../images/photos/DSC00367.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div5">
        <img
          src="../images/photos/3.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div6">
        <img
          src="../images/photos/DSC00299-Modifier.webp"
          alt=""
          class="image_grid"
        >
      </div>
    </div>
    <div class="parent px-[6%] mt-6 mb-64 ">
      <div class="div1">
        <img
          src="../images/photos/DSC01946.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div2">
        <img
          src="../images/photos/DSC02005.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div3">
        <img
          src="../images/photos/DSC01342.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div4">
        <img
          src="../images/photos/DSC01218.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div5">
        <img
          src="../images/photos/DSC01234.webp"
          alt=""
          class="image_grid"
        >
      </div>
      <div class="div6">
        <img
          src="../images/photos/DSC01215.webp"
          alt=""
          class="image_grid"
        >
      </div>
    </div>
    <section3 />
    <Footer />
  </div>
</template>

<script>
import Section3 from '@/modules/Section3.vue'
import Footer from '@/modules/Footer.vue'
export default {
	components: { Section3, Footer }
}
</script>

<style>

@media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 

.parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2,220px);
grid-column-gap: 24px;
grid-row-gap: 24px;
}
.image_grid{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}

}



@media  (max-width: 890px) and (min-width: 500px)  {

.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2,400px);
grid-column-gap: 24px;
grid-row-gap: 24px;
}

.image_grid{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}

}
@media (min-width:910px)  { 
.parent {
display: grid;
grid-template-columns: repeat(13, 1fr);
grid-template-rows: repeat(2,500px);
grid-column-gap: 24px;
grid-row-gap: 24px;
}

.div1 { grid-area: 1 / 1 / 2 / 6; }
.div2 { grid-area: 1 / 6 / 2 / 10; }
.div3 { grid-area: 1 / 10 / 2 / 14; }
.div4 { grid-area: 2 / 9 / 3 / 14; }
.div5 { grid-area: 2 / 5 / 3 / 9; }
.div6 { grid-area: 2 / 1 / 3 / 5; }

.image_grid{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}
}


</style>