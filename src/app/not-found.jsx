import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/SectionHeading'

export default function NotFound() {
  return (
    <section className="bg-forest-50">
      <Container className="flex flex-col items-center gap-5 py-24 text-center sm:py-32">
        <Eyebrow>404</Eyebrow>
        <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-display text-forest-900">
          Page not found
        </h1>
        <p className="max-w-[480px] text-lg text-ink-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" className="mt-2">
          Go back home
        </Button>
      </Container>
    </section>
  )
}
