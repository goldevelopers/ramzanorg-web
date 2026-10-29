import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/SectionHeading'

export function SimpleLayout({ eyebrow, title, intro, children }) {
  return (
    <>
      <section className="bg-forest-50">
        <Container className="flex flex-col gap-4 py-10 sm:gap-5 sm:py-24">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="max-w-[860px] font-display text-[clamp(2.125rem,5.5vw,4.25rem)] font-extrabold leading-[1.03] tracking-display text-forest-900">
            {title}
          </h1>
          {intro && (
            <p className="max-w-[640px] text-lg text-ink-600 sm:text-[19px]">
              {intro}
            </p>
          )}
        </Container>
      </section>
      {children && <Container className="py-10 sm:py-24">{children}</Container>}
    </>
  )
}
