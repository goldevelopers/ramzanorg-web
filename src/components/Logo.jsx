import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import logoImage from '@/images/logo.png'

export function Logo({ className, onDark = false, ...props }) {
  return (
    <Link
      href="/"
      className={clsx('flex items-center gap-3', className)}
      {...props}
    >
      <span
        className={clsx(
          'flex flex-none',
          onDark && 'rounded-xl bg-white p-1.5',
        )}
      >
        <Image
          src={logoImage}
          alt=""
          sizes="56px"
          className={clsx(
            'object-contain',
            onDark ? 'h-[38px] w-12' : 'h-[45px] w-14',
          )}
          priority
        />
      </span>
      {onDark ? (
        <span className="font-display text-xl font-extrabold text-white">
          Ramzan Talent Scholarship
        </span>
      ) : (
        <span className="flex flex-col leading-[1.15]">
          <span className="font-display text-xl font-extrabold tracking-tight text-forest-900">
            Ramzan
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-ink">
            Talent Scholarship
          </span>
        </span>
      )}
    </Link>
  )
}
