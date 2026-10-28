import clsx from 'clsx'

import { site, whatsappHref } from '@/lib/site'

function ShieldIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function FraudNotice({ className }) {
  return (
    <aside
      aria-label="Fraud warning"
      className={clsx(
        'flex flex-col gap-4 rounded-3xl bg-gold-cream p-6 sm:flex-row sm:items-start sm:p-7',
        className,
      )}
    >
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-forest-900 text-gold">
        <ShieldIcon className="h-6 w-6" />
      </span>
      <div className="flex flex-col gap-2">
        <p className="font-display text-xl font-bold text-forest-900">
          We never charge any fee
        </p>
        <p className="text-[15px] text-ink-700">
          Applying is free, and no one from {site.name} will ever ask you for
          money to process or guarantee a scholarship. If someone does, it is a
          scam: don’t pay, and{' '}
          <a
            href={whatsappHref(
              'I want to report someone asking for money for the Ramzan Scholarship.',
            )}
            className="font-semibold text-forest-700 underline decoration-forest-700/30 underline-offset-2 hover:text-forest-900"
          >
            report it to us on WhatsApp
          </a>
          .
        </p>
      </div>
    </aside>
  )
}
