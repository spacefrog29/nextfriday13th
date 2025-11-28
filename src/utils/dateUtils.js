// Format date for display (full format)
export function formatDate(date) {
  if (!date) return ''
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

// Format date short (month and day only)
export function formatDateShort(date) {
  if (!date) return ''
  const options = {
    month: 'long',
    day: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

// Format month short (3-letter abbreviation)
export function formatMonthShort(date) {
  if (!date) return ''
  const options = {
    month: 'short'
  }
  return date.toLocaleDateString('en-US', options)
}

// Format year
export function formatYear(date) {
  if (!date) return ''
  return date.getFullYear().toString()
}
