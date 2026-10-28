import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary: 'bg-forest-900 text-white hover:bg-forest-700',
  secondary:
    'bg-white text-forest-900 ring-1 ring-inset ring-forest-300 hover:bg-forest-50',
  gold: 'bg-gold text-ink-on hover:bg-[#E0B84A]',
  subtle: 'bg-forest-700 text-white hover:bg-forest-900',
}

const sizeStyles = {
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-6 py-4 text-base',
}

export function Button({
  variant = 'primary',
  size = 'lg',
  className,
  ...props
}) {
  className = clsx(
    'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  if (typeof props.href === 'undefined') {
    return <button className={className} {...props} />
  }

  let isExternal = /^(https?:|mailto:)/.test(props.href)
  return isExternal ? (
    <a className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
