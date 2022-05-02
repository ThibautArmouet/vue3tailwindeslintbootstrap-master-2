<template>
  <div class="mx-auto">
    <h2
      v-if="title"
      class="font-bold text-xl text-center mb-4"
    >
      {{ title }}
    </h2>
    <div
      ref="carouselContainer"
      class="flex items-start justify-start overflow-hidden mx-auto"
      :class="{
        'gap-2': gap === 8,
        'gap-4': gap === 16
      }"
      :style="`width: ${currentElementWith}px`"
    >
      <slot />
    </div>
    <div class="flex justify-between items-center pt-8">
      <button
        :disabled="currentElementKey === 0"
        @click="handleNavigation('previous')"
      >
        <Icon
          name="arrow_left"
          class="w-6 h-6"
          :class="{'text-white' : currentElementKey !== 0, 'text-zinc-700': currentElementKey === 0}"
        />
      </button>
      <div class="flex gap-3 mx-4">
        <div
          v-for="(element, index) in elements"
          :key="index"
          class="w-2 h-2 rounded-full transition-colors duration-300"
          :class="{'bg-white' : index === currentElementKey, 'bg-zinc-700' : index !== currentElementKey}"
        />
      </div>
      <button
        :disabled="elements.length === (currentElementKey + 1)"
        @click="handleNavigation('next')"
      >
        <Icon
          name="arrow_right"
          class="w-6 h-6"
          :class="{'text-white' : elements.length !== (currentElementKey + 1), 'text-zinc-700': elements.length === (currentElementKey + 1)}"
        />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Icon from '../Icon.vue'
export default Vue.extend({
  components: { Icon },
  props: {
    title: String,
    gap: {
      type: Number,
      default: 8,
    }
  },
  
  data() {
    return { 
      elements: [] as Element[],
      currentElementKey: 0 as number,
      currentScrollPosition: 0 as number
    }
  },
  computed:  {
    currentElementWith(): number {
      return (this.elements[this.currentElementKey] as HTMLElement)?.offsetWidth
    }
  },
  mounted() {
    this.elements = Array.from((this.$refs.carouselContainer as Element).children)
  },
  methods: {
    handleNavigation(direction: string): void {
      switch(direction) {
      case 'next':
        this.currentElementKey++
        break
      case 'previous':
        this.currentElementKey--
        break
      default:
        return
      }
      this.scrollToElement(direction)
    },
    scrollToElement(direction: string): void {
      const currentElement = this.elements[this.currentElementKey]
      const valueToScroll: number = this.currentScrollPosition + (direction === 'next' ? (currentElement as HTMLElement).offsetWidth + this.gap : -((currentElement as HTMLElement).offsetWidth + this.gap));
      (this.$refs.carouselContainer as Element).scrollTo({
        left: valueToScroll,
        behavior: 'smooth'
      })
      this.currentScrollPosition = valueToScroll
    }
  }
})
</script>