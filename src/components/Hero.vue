<template>
  <div class="xl:pb-72 lg:pb-72 md:pb-52 sm:pb-52 pb-32 pt-32 relative z-50">
    <H1>I’M a<br>web & graphic<br><span id="stroke">Designer</span></H1>
  </div>
</template>

<script>
export default {

}
</script>

<style>



@media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 

h1{
    font-size: 48px;
    text-transform:uppercase;
    font-family: "Outer Sans";
    color: white;
    line-height: 97%;
    text-align: left;
    padding: 0 7%;
    
   
}


 #stroke{
    font-family: "Outer Sans outline";
    color: white;
    letter-spacing: 1.5px;
    }
}
@media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ 

}
@media (min-width:790px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ 
h1{
    font-size: 100px;
    text-transform:uppercase;
    font-family: "Outer Sans";
    color: white;
    padding: 3% 0 0 7%;
    line-height: 97%;
    text-align: inherit;
   
   
}


 #stroke{
    font-family: "Outer Sans outline";
    color: white;
    letter-spacing: 1.5px;
    }
}

@media (min-width:940px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ 
h1{
    font-size: 140px;
    text-transform:uppercase;
    padding: 3% 0 0 7%;
    font-family: "Outer Sans";
    color: white;
    line-height: 97%;
    text-align: inherit;

   
}

 #stroke{
    font-family: "Outer Sans outline";
    color: white;
    letter-spacing: 11.5px;
    }

}


</style>