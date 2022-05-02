<template>
  <div  id="projectlist">
      <Projedctatome Title_project="Waikiki" skils1="ui design" skils2="branding" skils3="motion design"  image_projectlist="waikiki/waikiki_brand.png" link_project="waikiki"/>
      <Projedctatome Title_project="Hackhaton" skils1="ui design" skils2="Brand design" skils3="Mobile app" image_projectlist="kult/kult_interface_mobil.png" link_project="hackhaton-kult"/>
      <Projedctatome Title_project="Hyperplanning" skils1="Product design" skils2="Design system" skils3="Branding" image_projectlist="hyperplanning/hyper_ds.png" link_project="Hyperplanning"/>
      <Projedctatome Title_project="Arcasloc" skils1="ui design" skils2="branding" skils3="motion design" image_projectlist="waikiki/waikiki_brand.png" link_project="Hyperplanning"/>
      <section-3/>
      <footers/>
  </div>
</template>

<script>
import Footers from '../components/Footers.vue'
import Projedctatome from '../components/Projedctatome.vue'
import Section3 from './Section3.vue'

export default {
  components: {Projedctatome, Footers, Section3}
}
</script>

<style>

@media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
#projectlist{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    margin-top: 40px;
    
}

}

@media (min-width:800px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
#projectlist{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    margin-top: 80px;
    
}


}

@media (min-width:1100px)  { /* Desktop */
#projectlist{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    margin-top: 100px;
    
}
}
</style>
