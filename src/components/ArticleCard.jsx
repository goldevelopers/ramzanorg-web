import Link from 'next/link'
import clsx from 'clsx'

import { formatDate } from '@/lib/formatDate'

export function ArticleCard({ article, featured = false, className }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={clsx(
        'group flex min-h-[280px] flex-col gap-3.5 rounded-3xl p-8 transition',
        featured
          ? 'bg-forest-900 hover:bg-[#0A4536]'
          : 'border border-line bg-forest-50 hover:border-forest-300',
        className,
      )}
    >
      <span
        className={clsx(
          'self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.04em]',
          featured
            ? 'bg-gold text-ink-on'
            : 'bg-white text-forest-700 ring-1 ring-inset ring-forest-200',
        )}
      >
        {article.category ?? 'Article'}
      </span>
      <span
        className={clsx(
          'text-sm',
          featured ? 'text-forest-500' : 'text-ink-500',
        )}
      >
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        {article.author && article.author !== 'Admin' && ` · ${article.author}`}
      </span>
      <h3
        className={clsx(
          'font-display text-2xl font-bold leading-[1.25]',
          featured ? 'text-white' : 'text-forest-900',
        )}
      >
        {article.title}
      </h3>
      <p
        className={clsx(
          'line-clamp-3 text-[15px]',
          featured ? 'text-forest-500' : 'text-ink-600',
        )}
      >
        {article.description}
      </p>
      <span
        className={clsx(
          'mt-auto font-semibold',
          featured ? 'text-gold' : 'text-forest-700',
        )}
      >
        Read {article.category === 'Announcement' ? 'announcement' : 'article'}{' '}
        <span
          aria-hidden="true"
          className="inline-block transition group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  )
}
