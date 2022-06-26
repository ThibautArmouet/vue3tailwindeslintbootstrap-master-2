<template>
  <div
    id="projectlist"
    class="pl-[7%] xl:pb-48 lg:pb-48 md:pb-24 sm:pb-24 pb-24 "
  >
    <Projectatome
      title-project="Waikiki"
      skils1="ui design"
      skils2="branding"
      skils3="motion design"
      image_projectlist="waikiki/waikiki_brand.png"
      link-project="/waikiki"
    />
    <Projectatome
      title-project="Hackhaton"
      skils1="ui design"
      skils2="Brand design"
      skils3="Mobile app"
      image_projectlist="kult/kult_interface_mobil.png"
      link-project="/kult"
    />
    <Projectatome
      title-project="Hyperplanning"
      skils1="Product design"
      skils2="Design system"
      skils3="Branding"
      image_projectlist="hyperplanning/hyper_ds.png"
      link-project="/hyperplanning"
    />
    <Projectatome
      title-project="Photothèques"
      skils1="Portrait"
      skils2="Street photographie"
      skils3="Corporate"
      image_projectlist="waikiki/waikiki_brand.png"
      link-project="/phototheque"
    />
  </div>
  <Section3 />
  <Footer />
</template>

<script>

import Projectatome from '@/components/Projectatome.vue'
import Section3 from '@/modules/Section3.vue'
import Footer from '@/modules/Footer.vue'


export default {
	components: {Projectatome,Section3, Footer,}
}
</script>

<style>

@media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
#projectlist{
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 10;
    margin-top: 60px;
    
}

}

@media (min-width:800px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
#projectlist{
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 10;
    margin-top: 80px;
    
}


}

@media (min-width:1100px)  { /* Desktop */
#projectlist{
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 10;
    margin-top: 100px;
    
}
}
</style>
