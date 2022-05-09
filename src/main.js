import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'
import { router } from './router'
import AosVue from 'aos-vue'
import VueAnimate from 'vue-animate-scroll'



createApp(App).use(router).use(AosVue).use(VueAnimate).mount('#app')

