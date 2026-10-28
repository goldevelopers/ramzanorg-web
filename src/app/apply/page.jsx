import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DaysLeft } from '@/components/DaysLeft'
import { DocumentsChecklist } from '@/components/DocumentsChecklist'
import { FraudNotice } from '@/components/FraudNotice'
import { ArrowRightIcon, WhatsAppIcon } from '@/components/Icons'
import { SimpleLayout } from '@/components/SimpleLayout'
import { intake, site, whatsappHref } from '@/lib/site'

export const metadata = {
  title: 'Apply',
  description: 'Apply online for the Ramzan Talent Scholarship.',
}

const steps = [
  'Create an account on the application portal',
  'Complete and submit the application form',
  'Wait for the review and selection results',
]

export default function Apply() {
  if (!intake.open) {
    return (
      <SimpleLayout
        eyebrow="Apply"
        title="Applications are currently closed"
        intro="Keep an eye on our news page for the next intake, or contact us if you have a question."
      />
    )
  }

  return (
    <>
      <SimpleLayout
        eyebrow={`${intake.year} intake`}
        title={`Apply for the Ramzan Talent Scholarship ${intake.year}`}
        intro={`Applications are open until ${intake.deadlineLabel}. The whole application happens online.`}
      />
      <Container className="flex flex-col gap-12 py-16 sm:py-24 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <ol className="flex flex-col gap-3">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-2xl bg-forest-50 px-5 py-4 text-[17px]"
              >
                <span
                  className={
                    index === steps.length - 1
                      ? 'flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-gold font-display font-extrabold text-ink-on'
                      : 'flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-forest-900 font-display font-extrabold text-white'
                  }
                >
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <DocumentsChecklist />
          <FraudNotice />
        </div>
        <div className="flex w-full flex-col gap-4 rounded-3xl bg-forest-900 p-7 text-forest-100 lg:w-[360px] lg:flex-none">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">
            Deadline
          </p>
          <p className="font-display text-3xl font-extrabold text-white">
            {intake.deadlineLabel}
          </p>
          <p className="text-forest-500">
            <DaysLeft />
          </p>
          <Button href={site.applyUrl} variant="gold">
            Start your application
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </Button>
          <a
            href={whatsappHref('Hi! I need help with the Ramzan Scholarship.')}
            className="inline-flex items-center justify-center gap-2 py-2 font-semibold text-forest-500 hover:text-white"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Need help? Ask on WhatsApp
          </a>
        </div>
      </Container>
    </>
  )
}
