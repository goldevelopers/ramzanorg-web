import clsx from 'clsx'

export function Eyebrow({ className, onDark = false, children }) {
  return (
    <p
      className={clsx(
        'text-[13px] font-semibold uppercase tracking-[0.12em]',
        onDark ? 'text-gold' : 'text-gold-ink',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  as: Heading = 'h2',
  onDark = false,
  className,
  children,
}) {
  return (
    <div className={clsx('flex flex-col gap-3.5', className)}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <Heading
        className={clsx(
          'font-display text-[clamp(2.125rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-heading',
          onDark ? 'text-white' : 'text-forest-900',
        )}
      >
        {title}
      </Heading>
      {children}
    </div>
  )
}
