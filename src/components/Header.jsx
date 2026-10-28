'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CloseIcon, MenuIcon } from '@/components/Icons'
import { Logo } from '@/components/Logo'
import { intake, site } from '@/lib/site'

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/scholarship', label: 'Scholarship' },
  { href: '/scholarship#criteria', label: 'Eligibility' },
  { href: '/articles', label: 'News' },
  { href: '#contact', label: 'Contact' },
]

function isActive(pathname, href) {
  if (href.includes('#')) {
    return false
  }
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  let pathname = usePathname()
  let [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3EAE6] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Logo aria-label={`${site.name} home`} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-1 text-[15px] font-medium">
            {navigation.map((item) => {
              let active = isActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={clsx(
                      'block rounded-full px-3.5 py-2.5 transition',
                      active
                        ? 'bg-forest-100 font-semibold text-forest-700'
                        : 'text-ink-700 hover:text-forest-700',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button href={site.applyUrl} variant="secondary" size="md">
            Sign in
          </Button>
          <Button href={site.applyUrl} variant="subtle" size="md">
            Apply for {intake.year}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-forest-200 bg-white text-forest-900 lg:hidden"
        >
          <MenuIcon className="h-[22px] w-[22px]" />
        </button>
      </div>

      <Dialog
        open={menuOpen}
        onClose={setMenuOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-forest-950/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-x-0 top-0 max-h-full overflow-y-auto rounded-b-3xl bg-white px-4 pb-8 pt-3.5 duration-200 data-[closed]:-translate-y-4 data-[closed]:opacity-0 sm:px-6"
        >
          <div className="flex items-center justify-between">
            <Logo
              onClick={() => setMenuOpen(false)}
              aria-label={`${site.name} home`}
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-forest-200 text-forest-900"
            >
              <CloseIcon className="h-[22px] w-[22px]" />
            </button>
          </div>
          <nav aria-label="Main" className="mt-6">
            <ul className="divide-y divide-line border-y border-line">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={
                      isActive(pathname, item.href) ? 'page' : undefined
                    }
                    className="block py-4 font-display text-xl font-bold text-forest-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button href={site.applyUrl}>Apply for {intake.year}</Button>
            <Button href={site.applyUrl} variant="secondary">
              Sign in
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
