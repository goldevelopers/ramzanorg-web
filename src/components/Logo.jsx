import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import logoMark from '@/images/logo-mark.png'

// The emblem from the logo, with the name set beside it in the same classic
// serif style as the full logo's lettering.
export function Logo({ className, onDark = false, ...props }) {
  return (
    <Link
      href="/"
      className={clsx('flex items-center gap-3 sm:gap-3.5', className)}
      {...props}
    >
      <span
        className={clsx(
          'flex flex-none',
          onDark && 'rounded-xl bg-white px-2 py-1.5',
        )}
      >
        <Image
          src={logoMark}
          alt=""
          sizes="72px"
          className={clsx(
            'w-auto object-contain',
            onDark ? 'h-10' : 'h-11 sm:h-12',
          )}
          priority
        />
      </span>
      <span className="flex flex-col items-stretch gap-1">
        <span
          className={clsx(
            'font-brand text-[24px] font-bold leading-none tracking-[0.06em] sm:text-[27px]',
            onDark ? 'text-white' : 'text-forest-900',
          )}
        >
          RAMZAN
        </span>
        <span
          className={clsx(
            'flex items-center gap-1.5 text-[9.5px] font-semibold uppercase leading-none tracking-[0.2em] sm:text-[10.5px]',
            onDark ? 'text-gold' : 'text-gold-ink',
          )}
        >
          <span
            aria-hidden="true"
            className="h-px w-2.5 flex-none bg-current"
          />
          Talent Scholarship
          <span
            aria-hidden="true"
            className="h-px w-2.5 flex-none bg-current"
          />
        </span>
      </span>
    </Link>
  )
}
