import { whatsappHref } from '@/lib/site'

// Mirrors the WhatsApp button on apply.ramzan.org.pk
const WHATSAPP_MESSAGE = 'Hi! I need help with the Ramzan Scholarship.'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="#FFFFFF"
        d="M16.004 0h-.008C7.178 0 0 7.18 0 16c0 3.5.94 6.68 2.998 9.32L1.004 31.3l6.16-1.62A15.9 15.9 0 0 0 16.004 32C24.822 32 32 24.82 32 16S24.822 0 16.004 0zm8.75 22.15c-.48 1.36-2.52 2.48-4.2 2.64-.98.08-2.36.08-3.88-.48-.4-.14-.94-.32-1.62-.58-3.24-1.2-5.74-4.34-6.16-4.92-.42-.58-1.74-2.38-1.74-4.52 0-2.14 1.1-3.22 1.5-3.66.4-.44.86-.54 1.14-.54.28 0 .56 0 .82.02.28.02.66-.1 1.04.8.38.92 1.18 3.34 1.32 3.62.14.28.28.64.08 1.04-.2.4-.32.64-.6.98-.28.34-.58.74-.24 1.42.34.68 1.26 2.18 2.74 3.4 1.9 1.56 3.46 2.06 3.94 2.3.48.26.76.22 1.04-.14.28-.38 1.18-1.5 1.5-2.02.32-.52.64-.44 1.06-.28.42.16 2.68 1.34 3.16 1.6.48.26.8.4.92.62.12.22.12 1.28-.36 2.64z"
      />
    </svg>
  )
}

export function WhatsAppWidget() {
  return (
    <a
      href={whatsappHref(WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(37,211,102,.35)] transition duration-200 hover:scale-[1.08] hover:shadow-[0_6px_20px_rgba(37,211,102,.5)] sm:bottom-6 sm:right-6 sm:h-[60px] sm:w-[60px]"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-[72px] hidden whitespace-nowrap rounded-md bg-[#1e1e1e] px-3.5 py-2 text-[13px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  )
}
