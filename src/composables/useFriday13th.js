import { ref, computed, onMounted } from 'vue'

export function useFriday13th() {
  const today = ref(new Date())
  const currentYear = ref(new Date().getFullYear())

  // Check if a date is Friday the 13th
  const isFriday13th = (date) => {
    return date.getDay() === 5 && date.getDate() === 13
  }

  // Check if today is Friday the 13th
  const isTodayFriday13th = computed(() => {
    return isFriday13th(today.value)
  })

  // Find the next Friday the 13th
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

  // Get next Friday the 13th
  const nextFriday13th = computed(() => {
    return findNextFriday13th(today.value)
  })

  // Calculate days until next Friday the 13th
  const daysUntilNext = computed(() => {
    if (!nextFriday13th.value) return 0
    const diff = nextFriday13th.value - today.value
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  })

  // Find all Friday the 13ths in a given year
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

  // Get all Friday the 13ths in current year
  const friday13thsThisYear = computed(() => {
    return findAllFriday13thsInYear(currentYear.value)
  })

  // Fun fact
  const funFact = computed(() => {
    const facts = [
      "Fear of Friday the 13th is called paraskevidekatriaphobia!",
      "The longest period between two Friday the 13ths is 14 months.",
      "There is at least one Friday the 13th every year.",
      "The most Friday the 13ths that can occur in a single year is three.",
      "Friday the 13th occurs at least once every calendar year and up to three times a year."
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

  return {
    today,
    currentYear,
    isFriday13th,
    isTodayFriday13th,
    nextFriday13th,
    daysUntilNext,
    findAllFriday13thsInYear,
    friday13thsThisYear,
    funFact
  }
}
