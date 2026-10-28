import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/SectionHeading'
import { intake, site } from '@/lib/site'

export const metadata = {
  title: 'About',
  description:
    'The story of the Ramzan Talent Scholarship: from the Ramzan Welfare Society in Gujrat to a decade-long commitment to education in Pakistan.',
}

const people = [
  {
    initials: 'QR',
    name: 'Qazi Muhammad Ramzan',
    role: 'In whose memory the scholarship is named',
  },
  {
    initials: 'MA',
    name: 'Muhammad Asghar Qazi',
    role: 'Founder, Ramzan Welfare Society',
  },
  {
    initials: 'PA',
    name: 'Parveen Afza (Late)',
    role: 'Co-founder of the family’s welfare work',
  },
  {
    initials: 'QF',
    name: 'The Qazi Family',
    role: 'Today run by the sons of Muhammad Asghar Qazi',
    highlight: true,
  },
]

const timeline = [
  {
    when: 'Early years',
    title: 'Ramzan Welfare Society',
    description: 'Library and community hall built in Gujrat.',
  },
  {
    when: '2012',
    title: 'Scholarship founded',
    description: 'First students supported through college and university.',
  },
  {
    when: '2012–2024',
    title: 'A decade of support',
    description:
      'Hundreds of students helped to continue their studies since 2012.',
  },
  {
    when: String(intake.year),
    title: 'Applications online',
    description: `Students apply digitally at ${site.applyHost}.`,
  },
]

export default function About() {
  return (
    <>
      <section className="bg-forest-50">
        <Container className="flex flex-col items-center gap-6 pb-16 pt-16 text-center sm:pb-[88px] sm:pt-[104px]">
          <Eyebrow>Our story</Eyebrow>
          <h1 className="max-w-[940px] font-display text-[clamp(2.625rem,5.5vw,4.5rem)] font-extrabold leading-[1.03] tracking-display text-forest-900">
            From humble beginnings to lasting impact.
          </h1>
          <p className="max-w-[680px] text-lg text-ink-600 sm:text-[19px]">
            The Ramzan Talent Scholarship grew out of one family’s deep
            commitment to education and community welfare in Gujrat, Pakistan.
          </p>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-14 py-16 sm:py-[104px] lg:flex-row lg:gap-16">
          <div className="flex min-w-0 flex-[3] flex-col gap-6 text-lg text-ink-700">
            <p className="font-display text-[22px] font-medium leading-[1.45] text-forest-900 sm:text-[26px]">
              Our journey began long before the scholarship was officially
              established in 2012.
            </p>
            <p>
              In the early years, the Ramzan Welfare Society, under the
              leadership of Muhammad Asghar Qazi, was active in community
              initiatives in our hometown of Gujrat. The Society set up a
              library and a community hall, creating a space for learning and
              growth.
            </p>
            <p>
              The work was deeply personal. Muhammad Asghar Qazi dedicated it to
              the memory of his father, Qazi Muhammad Ramzan, and was supported
              tirelessly by his sister, Parveen Afza (Late). Their shared vision
              was to uplift the community through education and access to
              resources.
            </p>
            <p>
              In 2012 that vision reached beyond Gujrat. We began by supporting
              a small group of students facing financial difficulty in college
              and university. What started as a small effort has become a
              decade-long commitment to education in Pakistan.
            </p>
            <p>
              Today, the scholarship is managed by the sons of Muhammad Asghar
              Qazi, and the Qazi Family continues to fund it personally,
              carrying forward the legacy of Qazi Muhammad Ramzan and Parveen
              Afza.
            </p>
          </div>
          <aside className="flex min-w-0 flex-[2] flex-col gap-4">
            <Eyebrow>The people behind it</Eyebrow>
            <ul className="flex flex-col gap-4">
              {people.map((person) => (
                <li
                  key={person.name}
                  className="flex items-center gap-4 rounded-[20px] bg-forest-50 p-6"
                >
                  <span
                    aria-hidden="true"
                    className={
                      person.highlight
                        ? 'flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gold font-display text-xl font-extrabold text-forest-900'
                        : 'flex h-14 w-14 flex-none items-center justify-center rounded-full bg-forest-900 font-display text-xl font-extrabold text-gold'
                    }
                  >
                    {person.initials}
                  </span>
                  <span className="flex flex-col">
                    <strong className="font-semibold text-forest-900">
                      {person.name}
                    </strong>
                    <span className="text-[15px] text-ink-500">
                      {person.role}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="bg-forest-900 text-forest-100">
        <Container className="flex flex-col gap-14 py-16 sm:py-[104px]">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-heading text-white">
            A legacy, step by step
          </h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {timeline.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-2.5 border-t-[3px] border-gold pt-6"
              >
                <span className="font-display text-[26px] font-extrabold text-gold">
                  {item.when}
                </span>
                <strong className="text-lg text-white">{item.title}</strong>
                <span className="text-forest-500">{item.description}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container
          size="narrow"
          className="flex flex-col items-center gap-7 py-16 text-center sm:py-28"
        >
          <Eyebrow>Our mission</Eyebrow>
          <p className="font-display text-[clamp(1.75rem,3.4vw,2.625rem)] font-bold leading-[1.25] tracking-[-0.02em] text-forest-900">
            To ensure that no talented student is forced to abandon their
            academic dreams because of financial constraints.
          </p>
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            {intake.open && (
              <Button href={site.applyUrl}>Apply for {intake.year}</Button>
            )}
            <Button href={`mailto:${site.email}`} variant="secondary">
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
