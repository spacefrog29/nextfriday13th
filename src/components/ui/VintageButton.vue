<template>
  <button
    class="vintage-btn"
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, ghost
    validator: (value) => ['primary', 'secondary', 'ghost'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClass = computed(() => {
  const classes = []

  if (props.variant === 'secondary') {
    classes.push('bg-vintage-filmYellow text-vintage-midnight border-vintage-midnight')
  } else if (props.variant === 'ghost') {
    classes.push('bg-transparent text-vintage-smoke border-vintage-smoke')
  }

  if (props.disabled) {
    classes.push('opacity-50 cursor-not-allowed')
  }

  return classes.join(' ')
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.vintage-btn:disabled:hover {
  transform: rotate(-1deg) scale(1);
  box-shadow: 8px 8px 0 rgba(10,10,10,0.8);
}
</style>
