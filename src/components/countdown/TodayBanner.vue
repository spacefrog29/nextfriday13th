<template>
  <div v-if="isToday" class="today-banner animate-zoom-in">
    <h2>TODAY IS FRIDAY THE 13TH!</h2>
    <p class="current-date">{{ formattedDate }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatDate } from '../../utils/dateUtils'

const props = defineProps({
  isToday: {
    type: Boolean,
    required: true
  },
  date: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => formatDate(props.date))
</script>

<style scoped>
/* Additional today banner styling */
</style>
