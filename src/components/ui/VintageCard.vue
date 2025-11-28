<template>
  <div class="vintage-card" :class="cardClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default', // default, blood, spotlight
    validator: (value) => ['default', 'blood', 'spotlight'].includes(value)
  }
})

const cardClass = computed(() => {
  if (props.variant === 'blood') {
    return 'bg-gradient-to-br from-vintage-bloodRed to-vintage-shockRed text-vintage-paper'
  } else if (props.variant === 'spotlight') {
    return 'bg-vintage-spotlight text-vintage-midnight'
  }
  return '' // default styling from CSS
})
</script>

<style scoped>
/* Additional card-specific styling if needed */
</style>
