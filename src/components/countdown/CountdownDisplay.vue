<template>
  <VintageCard>
    <h3>{{ isToday ? 'Next Friday the 13th:' : 'Next Friday the 13th is:' }}</h3>
    <p class="next-date">{{ formattedNextDate }}</p>
    <p class="days-away">
      <span class="neon-number text-5xl font-mono">{{ daysAway }}</span>
      <span class="text-vintage-sepia ml-2">days away</span>
    </p>
  </VintageCard>
</template>

<script setup>
import { computed } from 'vue'
import VintageCard from '../ui/VintageCard.vue'
import { formatDate } from '../../utils/dateUtils'

const props = defineProps({
  nextDate: {
    type: Object,
    required: true
  },
  daysAway: {
    type: Number,
    required: true
  },
  isToday: {
    type: Boolean,
    default: false
  }
})

const formattedNextDate = computed(() => formatDate(props.nextDate))
</script>

<style scoped>
/* Additional countdown display styling */
</style>
