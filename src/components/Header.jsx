'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CloseIcon, MenuIcon, WhatsAppIcon } from '@/components/Icons'
import { Logo } from '@/components/Logo'
import { Modal } from '@/components/Modal'
import { intake, site, whatsappHref } from '@/lib/site'

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/scholarship', label: 'Scholarship' },
  { href: '/scholarship#criteria', label: 'Eligibility' },
  { href: '/articles', label: 'News' },
  { href: '/faq', label: 'FAQ' },
]

function isActive(pathname, href) {
  if (href.includes('#')) {
    return false
  }
  return pathname === href || pathname.startsWith(`${href}/`)
}

// On phones, slide the header away while scrolling down to free up the
// screen, and bring it back as soon as the visitor scrolls up.
function useHideOnScroll() {
  let [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    function update() {
      let y = window.scrollY
      if (Math.abs(y - lastY) > 8) {
        setHidden(y > lastY && y > 160)
        lastY = y
      }
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

export function Header() {
  let pathname = usePathname()
  let [menuOpen, setMenuOpen] = useState(false)
  let hidden = useHideOnScroll()

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b border-[#E3EAE6] bg-white/95 backdrop-blur transition-transform duration-300 motion-reduce:transition-none',
        hidden && !menuOpen && 'max-lg:-translate-y-full',
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-3.5">
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
          aria-expanded={menuOpen}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-forest-200 bg-white text-forest-900 transition active:scale-95 active:bg-forest-50 lg:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      <Modal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        aria-label="Menu"
        className="fixed inset-x-0 bottom-auto top-0 m-0 w-full max-w-none open:animate-sheet-down motion-reduce:open:animate-none lg:hidden"
      >
        <div className="max-h-[100dvh] overflow-y-auto rounded-b-3xl bg-white px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-3 sm:px-6">
          <div className="flex items-center justify-between">
            <Logo
              onClick={() => setMenuOpen(false)}
              aria-label={`${site.name} home`}
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-forest-200 text-forest-900 transition active:scale-95 active:bg-forest-50"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Main" className="mt-5">
            <ul className="divide-y divide-line border-y border-line">
              {navigation.map((item) => {
                let active = isActive(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={clsx(
                        'flex min-h-[56px] items-center justify-between font-display text-xl font-bold transition active:bg-forest-50',
                        active ? 'text-forest-700' : 'text-forest-900',
                      )}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-forest-300">
                        →
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            {intake.open && (
              <Button href={site.applyUrl}>Apply for {intake.year}</Button>
            )}
            <Button href={site.applyUrl} variant="secondary">
              Sign in
            </Button>
            <a
              href={whatsappHref(
                'Hi! I need help with the Ramzan Scholarship.',
              )}
              className="mt-1 inline-flex min-h-[48px] items-center justify-center gap-2 font-semibold text-forest-700"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#1FAF55]" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </Modal>
    </header>
  )
}
