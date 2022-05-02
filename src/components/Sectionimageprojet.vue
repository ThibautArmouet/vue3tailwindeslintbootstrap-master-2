<template>
  <div class="margin">
      <img :src="require(`@/assets/images/${link_picture_project_1}`)" alt="" class="image-large">
      <img :src="require(`@/assets/images/${link_picture_project_2}`)" alt="" class="image-large">
      <article id="container-imag-col">
        <img :src="require(`@/assets/images/${link_picture_project_3}`)" alt="" class="image-col first">
        <img :src="require(`@/assets/images/${link_picture_project_4}`)" alt="" class="image-col">
      </article>
  </div>
</template>

<script>
export default {

  props:{

        link_picture_project_1:{
            type: String,
            require: true,
        },
        link_picture_project_2:{
            type: String,
            require: true,
        },
        link_picture_project_3:{
            type: String,
            require: true,
        },
        link_picture_project_4:{
            type: String,
            require: true,
        },
    }

}
</script>

<style>
.image-large{

  margin: auto;
  margin-bottom: 32px;
  padding: 0 7%;
  width: 85%;
  height: fit-content;
 
  object-fit: contain;
  
}

#container-imag-col{

  display: flex;
  justify-content: center;
  gap: 2em;
  padding: 0 6.3% 0 5.3%;

}
.image-col{

  width: 37%;
  height: auto;
  object-fit: cover;
 
  

}

.first{

  
 width: 57%;
  height: fit-content;
  object-fit: contain;
  
}

.margin{
  margin-top: 300px;
}
</style>