import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function Apply() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-red-400 dark:text-red-500">
          Last Date: 30 Nov 2024
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Ramzan Talent Scholarship 2024
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Applications can be submit at <a href="mailto:scholarship@ramzan.org.pk">scholarship@ramzan.org.pk</a>
        </p>
        <Button href="/downloads/rts-2024-form.pdf" variant="secondary" className="mt-4">
          Download Application Form
        </Button>
      </div>
    </Container>
  )
}
