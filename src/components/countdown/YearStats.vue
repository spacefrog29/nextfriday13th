<template>
  <VintageCard>
    <h3>This Year ({{ year }})</h3>
    <p class="stat-number">{{ dates.length }}</p>
    <p class="stat-label">Friday the 13th{{ dates.length !== 1 ? 's' : '' }}</p>

    <div v-if="dates.length > 0" class="year-dates">
      <div v-for="date in dates" :key="date.getTime()" class="year-date">
        {{ formatDateShort(date) }}
      </div>
    </div>
  </VintageCard>
</template>

<script setup>
import VintageCard from '../ui/VintageCard.vue'
import { formatDateShort } from '../../utils/dateUtils'

defineProps({
  year: {
    type: Number,
    required: true
  },
  dates: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* Additional year stats styling */
</style>
