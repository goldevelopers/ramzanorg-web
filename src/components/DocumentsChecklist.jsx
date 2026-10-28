import clsx from 'clsx'

import { CheckIcon } from '@/components/Icons'
import { requiredDocuments } from '@/lib/faq'

export function DocumentsChecklist({ className }) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-5 rounded-3xl border border-line bg-white p-7',
        className,
      )}
    >
      <div className="flex flex-col gap-1.5">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-ink">
          Before you apply
        </p>
        <h2 className="font-display text-2xl font-bold text-forest-900">
          Documents checklist
        </h2>
        <p className="text-[15px] text-ink-600">
          Take a screenshot and keep these ready.
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {requiredDocuments.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] text-ink-700">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-forest-100 text-forest-700"
            >
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <p className="rounded-2xl bg-forest-50 p-4 text-sm text-ink-600">
        All documents must be{' '}
        <strong className="text-forest-900">attested</strong> and uploaded as
        clear photos or scans. No affidavit or stamp paper is needed.
      </p>
    </div>
  )
}
