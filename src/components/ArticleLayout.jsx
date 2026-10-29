import Link from 'next/link'

import { ArticleCard } from '@/components/ArticleCard'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CalendarIcon } from '@/components/Icons'
import { Prose } from '@/components/Prose'
import { ShareButtons } from '@/components/ShareButtons'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { intake, site, whatsappHref } from '@/lib/site'

function initials(name) {
  return name === 'Admin'
    ? 'RT'
    : name
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
}

async function RelatedArticles({ currentTitle }) {
  let related = (await getAllArticles())
    .filter((article) => article.title !== currentTitle)
    .slice(0, 2)

  if (related.length === 0) {
    return null
  }

  return (
    <section className="bg-forest-50">
      <Container className="flex flex-col gap-10 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.875rem,3.6vw,2.625rem)] font-extrabold leading-[1.1] tracking-heading text-forest-900">
            Keep reading
          </h2>
          <Link
            href="/articles"
            className="py-2.5 font-semibold text-forest-700 hover:text-forest-900"
          >
            All articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              className="bg-white"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Sidebar() {
  return (
    <aside className="flex w-full flex-col gap-5 lg:sticky lg:top-28 lg:w-[320px] lg:flex-none">
      {intake.open && (
        <div className="flex flex-col gap-4 rounded-3xl bg-forest-900 p-7 text-forest-100">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">
            At a glance
          </p>
          <dl className="flex flex-col gap-3.5 text-[15px]">
            {[
              ['Intake', `${site.name} ${intake.year}`],
              ['Status', 'Open'],
              ['Deadline', intake.deadlineLabel],
              ['Who can apply', 'Admitted students in financial need'],
            ].map(([term, value], index, rows) => (
              <div
                key={term}
                className={
                  index < rows.length - 1
                    ? 'flex flex-col gap-0.5 border-b border-forest-100/20 pb-3.5'
                    : 'flex flex-col gap-0.5'
                }
              >
                <dt className="text-forest-400">{term}</dt>
                <dd className="flex items-center gap-2 font-semibold text-white">
                  {term === 'Status' && (
                    <span
                      className="h-2 w-2 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                  )}
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <Button
            href={site.applyUrl}
            variant="gold"
            size="md"
            className="mt-1 py-3.5"
          >
            Apply now
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-2.5 rounded-3xl bg-forest-50 p-6">
        <p className="font-display text-[19px] font-bold text-forest-900">
          Have a question?
        </p>
        <p className="text-[15px] text-ink-600">
          Our team is happy to help with your application.
        </p>
        <a
          href={whatsappHref()}
          className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-forest-700 hover:text-forest-900"
        >
          WhatsApp {site.whatsappLabel}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-forest-700 hover:text-forest-900"
        >
          {site.email}
        </a>
      </div>
    </aside>
  )
}

export function ArticleLayout({ article, children }) {
  return (
    <>
      <section className="bg-forest-50">
        <Container className="flex flex-col gap-7 pb-14 pt-10 sm:pb-[72px] sm:pt-12">
          <Link
            href="/articles"
            className="-my-2 inline-flex min-h-[44px] items-center gap-2 self-start text-[15px] font-semibold text-forest-700 sm:hidden"
          >
            <span aria-hidden="true">←</span> All news &amp; articles
          </Link>
          <nav aria-label="Breadcrumb" className="hidden sm:block">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-[44px] items-center hover:text-forest-900"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/articles"
                  className="inline-flex min-h-[44px] items-center hover:text-forest-900"
                >
                  News &amp; articles
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                className="line-clamp-1 font-medium text-forest-900"
                aria-current="page"
              >
                {article.title}
              </li>
            </ol>
          </nav>
          <div className="flex max-w-[900px] flex-col gap-5">
            <span className="self-start rounded-full bg-gold px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-ink-on">
              {article.category ?? 'Article'}
            </span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.875rem)] font-extrabold leading-[1.05] tracking-display text-forest-900">
              {article.title}
            </h1>
            {article.lead && (
              <p className="max-w-[760px] text-lg text-ink-600 sm:text-xl">
                {article.lead}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-[15px] text-ink-600">
            <span className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-900 font-display text-[15px] font-extrabold text-gold">
                {initials(article.author)}
              </span>
              <span className="flex flex-col leading-tight">
                <strong className="font-semibold text-forest-900">
                  {article.author}
                </strong>
                <span className="text-[13px]">{site.name}</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarIcon className="h-[18px] w-[18px] text-forest-700" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
          </div>
        </Container>
      </section>

      <Container className="flex flex-col gap-12 pb-20 pt-12 sm:pb-[104px] sm:pt-[72px] lg:flex-row lg:items-start lg:gap-16">
        <article className="flex min-w-0 max-w-[720px] flex-1 flex-col gap-8">
          <Prose data-mdx-content>{children}</Prose>
          <ShareButtons title={article.title} />
        </article>
        <Sidebar />
      </Container>

      <RelatedArticles currentTitle={article.title} />
    </>
  )
}
