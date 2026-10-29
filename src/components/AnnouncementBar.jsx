import { intake, site } from '@/lib/site'

export function AnnouncementBar() {
  if (!intake.open) {
    return null
  }

  return (
    <div className="bg-forest-900 text-sm text-forest-100">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-1.5 gap-y-1 px-4 py-2 text-center sm:gap-x-4 sm:px-6">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
          <strong className="font-semibold text-white">
            <span className="sm:hidden">{intake.year} applications open</span>
            <span className="hidden sm:inline">
              Applications for {intake.year} are open
            </span>
          </strong>
        </span>
        <span className="hidden sm:inline">
          Last date to apply: {intake.deadlineLabel}
        </span>
        <span className="sm:hidden">· closes {intake.deadlineShort}</span>
        <a
          href={site.applyUrl}
          className="hidden min-h-[32px] items-center font-semibold text-gold hover:text-gold-soft sm:inline-flex"
        >
          Apply now →
        </a>
      </div>
    </div>
  )
}
