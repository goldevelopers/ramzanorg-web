import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DocumentsChecklist } from '@/components/DocumentsChecklist'
import { FaqBrowser } from '@/components/FaqBrowser'
import { FraudNotice } from '@/components/FraudNotice'
import { WhatsAppIcon } from '@/components/Icons'
import { SimpleLayout } from '@/components/SimpleLayout'
import { answerToText, faqGroups } from '@/lib/faq'
import { site, whatsappHref } from '@/lib/site'

export const metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about the Ramzan Talent Scholarship: who can apply, documents, the online application, selection and payment.',
}

// Lets search engines show answers directly in results
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: answerToText(item.answer) },
    })),
  ),
}

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SimpleLayout
        eyebrow="Questions"
        title="Frequently asked questions"
        intro="Everything students and parents ask us about eligibility, documents, applying and how the scholarship is paid."
      />
      <Container className="flex flex-col gap-10 py-8 sm:gap-12 sm:py-20 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col gap-10">
          <FraudNotice className="lg:hidden" />
          <FaqBrowser />
        </div>
        <aside className="flex w-full flex-col gap-6 lg:w-[360px] lg:flex-none">
          <FraudNotice className="hidden lg:flex" />
          <DocumentsChecklist />
          <div className="flex flex-col gap-3 rounded-3xl bg-forest-900 p-7 text-forest-100">
            <p className="font-display text-xl font-bold text-white">
              Still have a question?
            </p>
            <p className="text-[15px] text-forest-500">
              Message us and our team will help you.
            </p>
            <Button
              href={whatsappHref()}
              variant="gold"
              size="md"
              className="py-3.5"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Ask on WhatsApp
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-[44px] items-center justify-center text-[15px] font-semibold text-forest-500 hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </aside>
      </Container>
    </>
  )
}
