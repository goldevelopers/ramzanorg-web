import { WhatsAppIcon } from '@/components/Icons'
import { whatsappHref } from '@/lib/site'

// Mirrors the WhatsApp button on apply.ramzan.org.pk. On phones the bottom
// action bar carries WhatsApp instead.
const WHATSAPP_MESSAGE = 'Hi! I need help with the Ramzan Scholarship.'

export function WhatsAppWidget() {
  return (
    <a
      href={whatsappHref(WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 right-4 z-40 hidden h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(37,211,102,.35)] transition duration-200 hover:scale-[1.08] hover:shadow-[0_6px_20px_rgba(37,211,102,.5)] sm:bottom-6 sm:right-6 sm:h-[60px] sm:w-[60px] lg:flex"
    >
      <WhatsAppIcon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-[72px] hidden whitespace-nowrap rounded-md bg-[#1e1e1e] px-3.5 py-2 text-[13px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  )
}
