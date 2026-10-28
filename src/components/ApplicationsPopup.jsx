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
import { CloseIcon } from '@/components/Icons'
import logoImage from '@/images/logo.png'
import { intake, site } from '@/lib/site'

export function ApplicationsPopup() {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (intake.open) {
      setIsOpen(true)
    }
  }, [])

  function close() {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-[60]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-forest-950/50 backdrop-blur-sm duration-200 data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-float duration-200 data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-ink-500 hover:bg-forest-50 hover:text-forest-900"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <div className="mx-auto w-40">
            <Image src={logoImage} alt={site.name} sizes="10rem" priority />
          </div>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-ink">
            Applications are live
          </p>
          <DialogTitle className="mt-2 font-display text-[28px] font-extrabold leading-tight tracking-heading text-forest-900">
            Scholarship applications for {intake.year} are now open!
          </DialogTitle>
          <p className="mt-4 text-ink-600">
            Apply now for the Ramzan Talent Scholarship {intake.year}. The last
            date for submission is {intake.deadlineLabel}.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
        </DialogPanel>
      </div>
    </Dialog>
  )
}
