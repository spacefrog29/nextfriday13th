<template>
  <div class="container">
    <AppHeader />

    <main>
      <TodayBanner :is-today="isTodayFriday13th" :date="today" />

      <CountdownDisplay
        v-if="nextFriday13th"
        :next-date="nextFriday13th"
        :days-away="daysUntilNext"
        :is-today="isTodayFriday13th"
      />

      <YearStats :year="currentYear" :dates="friday13thsThisYear" />

      <VintageCard class="fun-fact">
        <p>{{ funFact }}</p>
      </VintageCard>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { useFriday13th } from './composables/useFriday13th'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import TodayBanner from './components/countdown/TodayBanner.vue'
import CountdownDisplay from './components/countdown/CountdownDisplay.vue'
import YearStats from './components/countdown/YearStats.vue'
import VintageCard from './components/ui/VintageCard.vue'

// Use the Friday 13th composable
const {
  today,
  currentYear,
  isTodayFriday13th,
  nextFriday13th,
  daysUntilNext,
  friday13thsThisYear,
  funFact
} = useFriday13th()
</script>
