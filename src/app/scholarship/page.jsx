import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { EligibilityChecker } from '@/components/EligibilityChecker'
import { Eyebrow, SectionHeading } from '@/components/SectionHeading'
import { intake, site, whatsappHref } from '@/lib/site'

export const metadata = {
  title: 'Scholarship',
  description:
    'Who can apply for the Ramzan Talent Scholarship, what we look for, and how to apply.',
}

const criteria = [
  {
    title: 'Secured admission',
    description:
      'You must have secured admission in a recognised college or university within Pakistan.',
  },
  {
    title: 'Financial need',
    description:
      'You face financial difficulty continuing your education and can show you lack the funds for tuition and other expenses.',
  },
  {
    title: 'Academic merit',
    description:
      'A strong academic record that reflects your dedication and potential for success.',
  },
  {
    title: 'Commitment to education',
    description:
      'A genuine commitment to your studies and a clear idea of how your education will help you reach your long-term goals.',
  },
]

const faqs = [
  {
    question: 'When is the last date to apply?',
    answer: intake.open
      ? `Applications for ${intake.year} close on ${intake.deadlineLabel}.`
      : 'Applications are currently closed. Keep an eye on our news page for the next intake.',
  },
  {
    question: 'How do I apply?',
    answer: `Create an account and submit your application online at ${site.applyHost}.`,
  },
  {
    question: 'Who funds the scholarship?',
    answer: 'The Qazi Family personally funds the Ramzan Talent Scholarship.',
  },
]

function Hero() {
  return (
    <section className="bg-forest-900 text-forest-100">
      <Container className="flex flex-col gap-12 py-16 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-[680px] flex-col gap-5">
          <Eyebrow onDark>The scholarship</Eyebrow>
          <h1 className="font-display text-[clamp(2.625rem,5.5vw,4.25rem)] font-extrabold leading-[1.03] tracking-display text-white">
            Unlocking potential, not just paying fees.
          </h1>
          <p className="max-w-[600px] text-lg text-forest-500 sm:text-[19px]">
            Scholarships aren’t just financial aid. They’re a bridge to a
            brighter future, and a chance for every student to fulfil their
            potential, whatever their circumstances.
          </p>
        </div>
        {intake.open && (
          <div className="flex w-full flex-col gap-3.5 rounded-3xl border border-forest-100/20 bg-white/5 p-7 lg:w-[340px] lg:flex-none">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">
              {intake.year} intake
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 text-[15px]">
              <dt className="text-forest-400">Status</dt>
              <dd className="font-semibold text-white">Open</dd>
              <dt className="text-forest-400">Deadline</dt>
              <dd className="font-semibold text-white">
                {intake.deadlineLabel}
              </dd>
              <dt className="text-forest-400">Apply at</dt>
              <dd className="font-semibold text-white">{site.applyHost}</dd>
            </dl>
            <Button
              href={site.applyUrl}
              variant="gold"
              size="md"
              className="mt-1.5 py-3.5"
            >
              Start application
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}

function WhyItMatters() {
  return (
    <section>
      <Container className="flex flex-col gap-12 py-16 sm:py-28">
        <SectionHeading
          eyebrow="Why scholarships matter"
          title="Too many students stop because of cost, not ability."
          className="max-w-[680px]"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3.5 rounded-3xl bg-forest-50 p-7 sm:p-9">
            <h3 className="font-display text-2xl font-bold text-forest-900">
              For the student
            </h3>
            <p className="text-ink-600">
              Tuition, books and other expenses can force students to postpone
              or abandon their studies. Financial support lets them focus on
              learning, excel academically and build successful careers.
            </p>
          </div>
          <div className="flex flex-col gap-3.5 rounded-3xl bg-forest-50 p-7 sm:p-9">
            <h3 className="font-display text-2xl font-bold text-forest-900">
              For the community
            </h3>
            <p className="text-ink-600">
              Scholarships promote equal access to education, so talented people
              from all walks of life can reach their goals, strengthening
              communities and the country as a whole.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Criteria() {
  return (
    <section id="criteria" className="scroll-mt-24 bg-forest-50">
      <Container className="flex flex-col gap-12 pb-14 pt-16 sm:pb-20 sm:pt-28 lg:flex-row lg:gap-16">
        <SectionHeading
          eyebrow="Eligibility criteria"
          title="What we look for"
          className="lg:w-[340px] lg:flex-none"
        >
          <p className="text-[17px] text-ink-600">
            The primary focus is financial need. Academic performance is also
            considered in selection.
          </p>
        </SectionHeading>
        <ol className="flex flex-1 flex-col gap-4">
          {criteria.map((item, index) => (
            <li
              key={item.title}
              className="flex items-start gap-5 rounded-[20px] border border-line bg-white p-6 sm:gap-6 sm:p-7"
            >
              <span className="font-display text-3xl font-extrabold leading-none text-gold sm:text-4xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex flex-col gap-1.5">
                <strong className="font-display text-[21px] font-bold text-forest-900">
                  {item.title}
                </strong>
                <span className="text-ink-600">{item.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </Container>
      <Container
        id="check-eligibility"
        size="narrow"
        className="scroll-mt-24 pb-16 sm:pb-28"
      >
        <h3 className="mb-6 text-center font-display text-2xl font-bold text-forest-900 sm:text-[28px]">
          Check your eligibility in under a minute
        </h3>
        <EligibilityChecker />
      </Container>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-24">
      <Container size="narrow" className="flex flex-col gap-10 py-16 sm:py-28">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked"
          className="items-center text-center"
        />
        <div className="flex flex-col border-t border-line">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group border-b border-line px-1 py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-bold text-forest-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-forest-100 text-forest-700 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-600">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="text-center text-ink-600">
          Still have a question? Email{' '}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-forest-700 hover:text-forest-900"
          >
            {site.email}
          </a>{' '}
          or{' '}
          <a
            href={whatsappHref()}
            className="font-semibold text-forest-700 hover:text-forest-900"
          >
            message us on WhatsApp
          </a>
          .
        </p>
      </Container>
    </section>
  )
}

export default function Scholarship() {
  return (
    <>
      <Hero />
      <WhyItMatters />
      <Criteria />
      <Faq />
    </>
  )
}
