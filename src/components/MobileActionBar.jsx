import { WhatsAppIcon } from '@/components/Icons'
import { intake, site, whatsappHref } from '@/lib/site'

const WHATSAPP_MESSAGE = 'Hi! I need help with the Ramzan Scholarship.'

// Phones only: keeps "Apply" and WhatsApp within thumb reach on every page.
// On larger screens the header buttons and floating WhatsApp button do this.
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 animate-bar-up motion-reduce:animate-none lg:hidden">
      <div className="glass mx-auto flex max-w-[640px] items-center gap-2 rounded-[26px] p-2">
        {intake.open ? (
          <a
            href={site.applyUrl}
            className="flex min-h-[52px] flex-1 select-none flex-col items-center justify-center rounded-[20px] bg-forest-900 px-4 text-white transition active:scale-[0.98] active:bg-forest-700"
          >
            <span className="text-[16px] font-semibold leading-tight">
              Apply for {intake.year}
            </span>
            <span className="text-xs leading-tight text-forest-500">
              Free · closes {intake.deadlineShort}
            </span>
          </a>
        ) : (
          <a
            href="/faq"
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-[20px] bg-forest-900 px-4 font-semibold text-white transition active:scale-[0.98]"
          >
            Read the FAQ
          </a>
        )}
        <a
          href={whatsappHref(WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-[52px] w-[52px] flex-none select-none items-center justify-center rounded-[20px] bg-[#25D366] text-white transition active:scale-95"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>
    </div>
  )
}
