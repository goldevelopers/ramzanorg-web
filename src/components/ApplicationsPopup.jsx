'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { CloseIcon } from '@/components/Icons'
import { Modal } from '@/components/Modal'
import logoImage from '@/images/logo.png'
import { intake, site } from '@/lib/site'

const SEEN_KEY = 'rts-applications-popup-seen'
const ONE_DAY = 24 * 60 * 60 * 1000

// Show the announcement at most once a day, so returning visitors on a phone
// aren't blocked by it every time they open the home page.
function shouldShow() {
  try {
    let seen = Number(localStorage.getItem(SEEN_KEY))
    return !seen || Date.now() - seen > ONE_DAY
  } catch {
    return true
  }
}

function markSeen() {
  try {
    localStorage.setItem(SEEN_KEY, String(Date.now()))
  } catch {
    // Storage can be unavailable (private mode); the popup just shows again
  }
}

export function ApplicationsPopup() {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (intake.open && shouldShow()) {
      setIsOpen(true)
      markSeen()
    }
  }, [])

  function close() {
    setIsOpen(false)
  }

  return (
    <Modal
      open={isOpen}
      onClose={close}
      aria-labelledby="applications-popup-title"
      className="m-auto w-[calc(100%-2rem)] max-w-md open:animate-pop-in motion-reduce:open:animate-none"
    >
      <div className="relative rounded-3xl bg-white px-6 pb-7 pt-8 text-center shadow-float sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center rounded-full text-ink-500 transition hover:bg-forest-50 hover:text-forest-900 active:bg-forest-100"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        <div className="mx-auto w-32 sm:w-40">
          <Image src={logoImage} alt={site.name} sizes="10rem" />
        </div>
        <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-ink">
          Applications are live
        </p>
        <h2
          id="applications-popup-title"
          className="mt-2 font-display text-[26px] font-extrabold leading-tight tracking-heading text-forest-900 sm:text-[28px]"
        >
          Scholarship applications for {intake.year} are now open!
        </h2>
        <p className="mt-3 text-ink-600">
          Apply now for the Ramzan Talent Scholarship {intake.year}. The last
          date for submission is {intake.deadlineLabel}.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            href={site.applyUrl}
            onClick={close}
            size="md"
            className="py-3.5"
          >
            Apply now
          </Button>
          <Button
            href={intake.announcementHref}
            variant="secondary"
            size="md"
            className="py-3.5"
            onClick={close}
          >
            Learn more
          </Button>
        </div>
      </div>
    </Modal>
  )
}
