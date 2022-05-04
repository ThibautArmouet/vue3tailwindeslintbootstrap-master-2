<template>
  <div class="flex flex-row gap-2 items-center">     
     <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.79092 5.62705L9.79092 1.20907M9.79092 1.20907L5.37294 1.20907M9.79092 1.20907L0.696042 10.3039" stroke="white"/>
     </svg>
            <a href="{{link}}">
                <li class="text-[#B87D4B] text-base list-none">{{sociallink}}</li>
            </a>
             
    
  </div>
</template>

<script>
/* eslint-disable */
export default {
    
    props:{
        sociallink:{
            type: String,
            require: true,
        },

        link:{

            type: String,
            require: true,
        },

    }
}
</script>

<style>

</style>