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

// The phone menu groups the scholarship pages under one heading, like a
// product menu, then lists the other pages as large rows.
const mobileGroup = {
  label: 'Scholarship',
  links: [
    { href: '/scholarship', label: 'Overview' },
    { href: '/scholarship#criteria', label: 'Who can apply' },
    { href: '/#check-eligibility', label: 'Check your eligibility' },
    { href: '/apply', label: 'How to apply' },
  ],
}

const mobileLinks = [
  { href: '/about', label: 'About' },
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
        'glass-bar sticky top-0 z-50 transition-transform duration-300 motion-reduce:transition-none',
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
          className="glass flex h-12 w-12 items-center justify-center rounded-full text-forest-900 transition active:scale-95 lg:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      <Modal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        aria-label="Menu"
        className="fixed inset-y-0 left-auto right-0 m-0 h-[100dvh] max-h-[100dvh] w-[min(88vw,400px)] max-w-none backdrop:bg-forest-950/25 backdrop:backdrop-blur-md open:animate-drawer-in motion-reduce:open:animate-none lg:hidden"
      >
        <div className="glass-strong flex h-full flex-col overflow-y-auto overscroll-contain rounded-l-[28px] border-r-0 px-6 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-[calc(1rem+env(safe-area-inset-top))]">
          <div className="flex items-center justify-between">
            <Logo
              onClick={() => setMenuOpen(false)}
              aria-label={`${site.name} home`}
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="-mr-2 flex h-12 w-12 items-center justify-center rounded-full text-ink-700 transition active:scale-95 active:bg-forest-950/5"
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>

          <nav aria-label="Main" className="mt-8 flex-1">
            <p
              id="menu-group-label"
              className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500"
            >
              {mobileGroup.label}
            </p>
            <ul aria-labelledby="menu-group-label" className="mt-2 pb-3">
              {mobileGroup.links.map((item) => {
                let active = isActive(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={clsx(
                        'flex min-h-[48px] items-center rounded-xl pl-4 font-display text-[19px] font-semibold transition active:bg-forest-950/5',
                        active ? 'text-forest-700' : 'text-ink',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="border-t border-forest-950/10">
              {mobileLinks.map((item) => {
                let active = isActive(pathname, item.href)
                return (
                  <li key={item.href} className="border-b border-forest-950/10">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={clsx(
                        'flex min-h-[64px] items-center font-display text-[24px] font-bold tracking-tight transition active:opacity-70',
                        active ? 'text-forest-700' : 'text-ink',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col gap-2">
            {intake.open && (
              <a
                href={site.applyUrl}
                className="flex min-h-[56px] items-center justify-center rounded-full bg-gold px-6 text-[17px] font-semibold text-ink-on shadow-[0_10px_24px_-10px_rgba(212,167,44,0.8)] transition active:scale-[0.98]"
              >
                Apply for {intake.year}
              </a>
            )}
            <div className="flex items-center justify-between">
              <a
                href={site.applyUrl}
                className="inline-flex min-h-[48px] items-center font-semibold text-forest-700"
              >
                Sign in
              </a>
              <a
                href={whatsappHref(
                  'Hi! I need help with the Ramzan Scholarship.',
                )}
                className="inline-flex min-h-[48px] items-center gap-2 font-semibold text-forest-700"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#1FAF55]" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  )
}
