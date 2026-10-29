'use client'

import { useMemo, useState } from 'react'

import { Button } from '@/components/Button'
import { FaqAnswer } from '@/components/FaqAnswer'
import { WhatsAppIcon } from '@/components/Icons'
import { answerToText, faqGroups } from '@/lib/faq'
import { whatsappHref } from '@/lib/site'

export function FaqBrowser() {
  let [query, setQuery] = useState('')
  let term = query.trim().toLowerCase()

  let groups = useMemo(() => {
    if (!term) {
      return faqGroups
    }
    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          `${item.question} ${answerToText(item.answer)}`
            .toLowerCase()
            .includes(term),
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [term])

  let resultCount = groups.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <label htmlFor="faq-search" className="sr-only">
          Search questions
        </label>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search, e.g. CNIC, documents, fee"
          className="h-14 w-full rounded-2xl border border-forest-300 bg-white px-5 text-base text-ink placeholder:text-ink-500 focus:border-forest-700 focus:outline-none focus:ring-4 focus:ring-forest-700/10"
        />
        <p className="sr-only" aria-live="polite">
          {term
            ? `${resultCount} ${resultCount === 1 ? 'question' : 'questions'} found`
            : ''}
        </p>
        {!term && (
          <nav aria-label="FAQ topics">
            <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full bg-forest-100 px-4 text-[15px] font-semibold text-forest-700 transition hover:bg-forest-200 hover:text-forest-900 active:bg-forest-200"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-28">
          <h2 className="font-display text-[26px] font-extrabold tracking-heading text-forest-900 sm:text-3xl">
            {group.title}
          </h2>
          <div className="mt-4 flex flex-col border-t border-line">
            {group.items.map((item) => (
              <details
                key={item.question}
                open={Boolean(term)}
                className="group border-b border-line px-1"
              >
                <summary className="flex min-h-[56px] cursor-pointer list-none items-start justify-between gap-4 py-5 font-display text-lg font-bold leading-snug text-forest-900 transition active:bg-forest-50 sm:text-xl [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-forest-100 text-forest-700 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <FaqAnswer blocks={item.answer} />
              </details>
            ))}
          </div>
        </section>
      ))}

      {groups.length === 0 && (
        <div className="flex flex-col items-start gap-4 rounded-3xl bg-forest-50 p-7">
          <p className="font-display text-xl font-bold text-forest-900">
            No questions match “{query.trim()}”
          </p>
          <p className="text-ink-600">
            Try a different word, or ask us directly. We’re happy to help.
          </p>
          <Button
            href={whatsappHref(`Hi! I have a question: ${query.trim()}`)}
            variant="secondary"
            size="md"
            className="py-3"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Ask on WhatsApp
          </Button>
        </div>
      )}
    </div>
  )
}
