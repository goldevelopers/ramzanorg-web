'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'

import { Button } from '@/components/Button'
import logoImage from '@/images/logo.png'

const APPLY_URL = 'https://apply.ramzan.org.pk/signin'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ApplicationsPopup() {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  function close() {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-[60]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-zinc-800/50 backdrop-blur-sm duration-200 data-[closed]:opacity-0 dark:bg-black/70"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-zinc-900/5 duration-200 data-[closed]:scale-95 data-[closed]:opacity-0 dark:bg-zinc-900 dark:ring-zinc-800"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 -m-1 p-1 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <div className="mx-auto w-48 overflow-hidden rounded-2xl bg-white p-2">
            <Image
              src={logoImage}
              alt="Ramzan Talent Scholarship"
              sizes="12rem"
              priority
            />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-teal-500">
            Applications are live
          </p>
          <DialogTitle className="mt-2 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Scholarship Applications for 2026 are now open!
          </DialogTitle>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Apply now for the Ramzan Talent Scholarship 2026. The last date for
            submission is 18th December 2026.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href={APPLY_URL} onClick={close}>
              Apply Now
            </Button>
            <Button
              href="/articles/applications-open-ramzan-talent-scholarship-2026"
              variant="secondary"
              onClick={close}
            >
              Learn More
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
