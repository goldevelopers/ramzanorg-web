import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { WhatsAppWidget } from '@/components/WhatsAppWidget'
import { site, whatsappHref } from '@/lib/site'

function FooterLink({ href, children }) {
  let className =
    'inline-flex min-h-[44px] items-center text-forest-500 transition hover:text-white active:text-white'
  return /^(https?:|mailto:)/.test(href) ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-forest-950 text-[15px] text-forest-500">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-16 sm:px-6 sm:pt-[72px] lg:pb-8">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-[380px] flex-col gap-4">
            <Logo onDark aria-label={`${site.name} home`} />
            <p>
              Empowering dreams, one student at a time. A Qazi Family initiative
              from Gujrat, Pakistan.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 sm:gap-16">
            <div className="flex flex-col">
              <p className="mb-1 font-semibold text-white">Explore</p>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/scholarship">Scholarship</FooterLink>
              <FooterLink href="/articles">Articles</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/apply">Apply</FooterLink>
            </div>
            <div className="flex flex-col">
              <p className="mb-1 font-semibold text-white">Contact</p>
              <FooterLink href={`mailto:${site.email}`}>
                {site.email}
              </FooterLink>
              <FooterLink href={whatsappHref()}>
                WhatsApp {site.whatsappLabel}
              </FooterLink>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-forest-500/20 pt-6 text-sm text-forest-400">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Made with care in Gujrat, Pakistan</p>
        </div>
      </div>
      <WhatsAppWidget />
    </footer>
  )
}
