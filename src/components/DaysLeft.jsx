'use client'

import { useEffect, useState } from 'react'

import { intake } from '@/lib/site'

function daysUntil(isoDate) {
  let end = new Date(`${isoDate}T23:59:59+05:00`)
  return Math.ceil((end - Date.now()) / 86_400_000)
}

// Rendered on the client so the count is correct on the day it is viewed,
// not the day the site was built.
export function DaysLeft({ fallback = 'Apply before the deadline' }) {
  let [days, setDays] = useState(null)

  useEffect(() => {
    setDays(daysUntil(intake.deadline))
  }, [])

  if (days === null) {
    return fallback
  }
  if (days < 0) {
    return 'Applications have closed'
  }
  if (days === 0) {
    return 'Last day to apply'
  }
  return `${days} ${days === 1 ? 'day' : 'days'} left to apply`
}
