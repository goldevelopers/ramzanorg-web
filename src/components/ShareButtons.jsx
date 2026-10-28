'use client'

import { useEffect, useState } from 'react'

import { ChatIcon, FacebookIcon, LinkIcon } from '@/components/Icons'

const buttonClass =
  'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-semibold text-forest-900 ring-1 ring-inset ring-forest-300 transition hover:bg-forest-50'

export function ShareButtons({ title }) {
  let [url, setUrl] = useState('')
  let [copied, setCopied] = useState(false)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-7">
      <p className="text-[15px] font-semibold text-forest-900">
        Share with a student who needs this
      </p>
      <div className="flex flex-wrap gap-2.5">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <ChatIcon className="h-[18px] w-[18px]" />
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <FacebookIcon className="h-[18px] w-[18px]" />
          Facebook
        </a>
        <button type="button" onClick={copyLink} className={buttonClass}>
          <LinkIcon className="h-[18px] w-[18px]" />
          <span aria-live="polite">{copied ? 'Link copied' : 'Copy link'}</span>
        </button>
      </div>
    </div>
  )
}
