<template>
  <div class="container">
    <header>
      <h1>Friday 13th</h1>
    </header>

    <main>
      <div v-if="isTodayFriday13th" class="today-banner">
        <h2>🎃 TODAY IS FRIDAY 13TH! 🎃</h2>
        <p class="current-date">{{ formatDate(today) }}</p>
      </div>

      <div class="info-card">
        <h3>{{ isTodayFriday13th ? 'Next Friday 13th:' : 'Next Friday 13th is:' }}</h3>
        <p class="next-date">{{ formatDate(nextFriday13th) }}</p>
        <p class="days-away">{{ daysUntilNext }} days away</p>
      </div>

      <div class="stats-card">
        <h3>This Year ({{ currentYear }})</h3>
        <p class="stat-number">{{ friday13thsThisYear.length }}</p>
        <p class="stat-label">Friday 13th{{ friday13thsThisYear.length !== 1 ? 's' : '' }}</p>

        <div v-if="friday13thsThisYear.length > 0" class="year-dates">
          <div v-for="date in friday13thsThisYear" :key="date.getTime()" class="year-date">
            {{ formatDateShort(date) }}
          </div>
        </div>
      </div>

      <div class="fun-fact">
        <p>{{ funFact }}</p>
      </div>
    </main>

    <footer>
      <p>www.nextfriday13th.com</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const today = ref(new Date())
const currentYear = ref(new Date().getFullYear())

// Check if a date is Friday 13th
const isFriday13th = (date) => {
  return date.getDay() === 5 && date.getDate() === 13
}

// Check if today is Friday 13th
const isTodayFriday13th = computed(() => {
  return isFriday13th(today.value)
})

// Find the next Friday 13th
const findNextFriday13th = (startDate) => {
  const date = new Date(startDate)
  date.setDate(date.getDate() + 1) // Start from tomorrow

  // Check up to 2 years ahead
  const maxDate = new Date(date)
  maxDate.setFullYear(maxDate.getFullYear() + 2)

  while (date < maxDate) {
    if (isFriday13th(date)) {
      return new Date(date)
    }
    // Move to the 13th of the next month
    date.setMonth(date.getMonth() + 1)
    date.setDate(13)
  }

  return null
}

// Get next Friday 13th
const nextFriday13th = computed(() => {
  return findNextFriday13th(today.value)
})

// Calculate days until next Friday 13th
const daysUntilNext = computed(() => {
  if (!nextFriday13th.value) return 0
  const diff = nextFriday13th.value - today.value
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
})

// Find all Friday 13ths in a given year
const findAllFriday13thsInYear = (year) => {
  const dates = []
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13)
    if (isFriday13th(date)) {
      dates.push(date)
    }
  }
  return dates
}

// Get all Friday 13ths in current year
const friday13thsThisYear = computed(() => {
  return findAllFriday13thsInYear(currentYear.value)
})

// Format date for display
const formatDate = (date) => {
  if (!date) return ''
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

// Format date short
const formatDateShort = (date) => {
  if (!date) return ''
  const options = {
    month: 'long',
    day: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

// Fun fact
const funFact = computed(() => {
  const facts = [
    "Fear of Friday 13th is called paraskevidekatriaphobia!",
    "The longest period between two Friday 13ths is 14 months.",
    "There is at least one Friday 13th every year.",
    "The most Friday 13ths that can occur in a single year is three.",
    "Friday 13th occurs at least once every calendar year and up to three times a year."
  ]
  const factIndex = today.value.getMonth() % facts.length
  return facts[factIndex]
})

// Update time every minute
onMounted(() => {
  setInterval(() => {
    today.value = new Date()
  }, 60000)
})
</script>
