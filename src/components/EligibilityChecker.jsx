'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  WhatsAppIcon,
} from '@/components/Icons'
import { intake, site, whatsappHref } from '@/lib/site'

// Questions follow the published eligibility criteria. They are a quick
// guide only: the scholarship team makes the final decision.
const questions = [
  {
    id: 'admission',
    title:
      'Have you secured admission at a recognised college or university in Pakistan?',
    options: [
      { value: 'yes', label: 'Yes, I have admission' },
      { value: 'waiting', label: 'Not yet, I’m waiting for admission' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'need',
    title:
      'Is it difficult for you or your family to pay your tuition and study costs?',
    options: [
      { value: 'yes', label: 'Yes, we can’t cover the costs' },
      { value: 'partly', label: 'We can cover some, but not all' },
      { value: 'no', label: 'No, we can afford them' },
    ],
  },
  {
    id: 'merit',
    title: 'How would you describe your most recent results?',
    options: [
      { value: 'strong', label: 'Good or excellent' },
      { value: 'average', label: 'Average' },
      { value: 'low', label: 'Below average' },
    ],
  },
  {
    id: 'goals',
    title: 'Do you know how your studies will help your long-term goals?',
    options: [
      { value: 'yes', label: 'Yes, I have a clear plan' },
      { value: 'somewhat', label: 'I have some idea' },
      { value: 'no', label: 'Not yet' },
    ],
  },
]

function getResult(answers) {
  if (answers.admission === 'no') {
    return {
      tone: 'no',
      title: 'Secure your admission first',
      body: 'The scholarship supports students who already have admission at a recognised college or university in Pakistan. Once you have your admission, come back and check again.',
    }
  }
  if (answers.need === 'no') {
    return {
      tone: 'no',
      title: 'This scholarship may not be the right fit',
      body: 'The Ramzan Talent Scholarship is for students who face financial difficulty continuing their education, so students who can afford their studies are unlikely to be selected.',
    }
  }

  let tips = []
  if (answers.admission === 'waiting') {
    tips.push(
      `You’ll need confirmed admission to apply, so make sure it comes through before ${intake.deadlineLabel}.`,
    )
  }
  if (answers.merit !== 'strong') {
    tips.push(
      'Financial need comes first, but results are also considered, so describe your effort and progress in your application.',
    )
  }
  if (answers.goals !== 'yes') {
    tips.push(
      'Before you apply, think about what you want to achieve with your degree. A clear goal strengthens your application.',
    )
  }

  if (answers.admission === 'waiting') {
    return {
      tone: 'maybe',
      title: 'You can apply once you’re admitted',
      body: 'You match the scholarship’s focus on financial need. As soon as your admission is confirmed, you’ll be ready to apply.',
      tips,
    }
  }

  return {
    tone: 'yes',
    title: 'You look eligible. We encourage you to apply!',
    body: 'Based on your answers, you match what the Ramzan Talent Scholarship looks for.',
    tips,
  }
}

const toneStyles = {
  yes: { badge: 'bg-forest-900 text-white', icon: CheckIcon },
  maybe: { badge: 'bg-gold text-ink-on', icon: ArrowRightIcon },
  no: { badge: 'bg-forest-100 text-forest-900', icon: CloseIcon },
}

export function EligibilityChecker({ className }) {
  let [step, setStep] = useState(0)
  let [answers, setAnswers] = useState({})
  let headingRef = useRef(null)
  let baseId = useId()

  let finished = step >= questions.length
  let question = questions[Math.min(step, questions.length - 1)]
  let result = finished ? getResult(answers) : null

  function focusHeading() {
    // Move focus to the new question or result for keyboard and screen reader users
    requestAnimationFrame(() => headingRef.current?.focus())
  }

  function choose(value) {
    let next = { ...answers, [question.id]: value }
    setAnswers(next)
    // A blocking answer goes straight to the result
    let blocked =
      (question.id === 'admission' && value === 'no') ||
      (question.id === 'need' && value === 'no')
    setStep(blocked ? questions.length : step + 1)
    focusHeading()
  }

  function back() {
    // Step back to the last question that was answered (blocking answers skip ahead)
    let previous = Math.min(step, questions.length) - 1
    while (previous > 0 && answers[questions[previous].id] === undefined) {
      previous--
    }
    setStep(Math.max(previous, 0))
    focusHeading()
  }

  function restart() {
    setAnswers({})
    setStep(0)
    focusHeading()
  }

  let progress = finished ? 100 : (step / questions.length) * 100

  return (
    <div
      className={clsx(
        'overflow-hidden rounded-[28px] border border-line bg-white shadow-float',
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-5 sm:px-8">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-ink">
            Eligibility checker
          </p>
          <p className="text-[15px] text-ink-600">
            Four quick questions. Takes under a minute.
          </p>
        </div>
        <p className="text-sm font-medium text-ink-500" aria-live="polite">
          {finished
            ? 'Your result'
            : `Question ${step + 1} of ${questions.length}`}
        </p>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-forest-100"
          role="progressbar"
          aria-label="Checker progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="h-full rounded-full bg-forest-700 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="px-6 py-7 sm:px-8 sm:py-8">
        {!finished ? (
          <div key={question.id}>
            <h3
              id={`${baseId}-question`}
              ref={headingRef}
              tabIndex={-1}
              className="font-display text-[22px] font-bold leading-snug text-forest-900 outline-none sm:text-2xl"
            >
              {question.title}
            </h3>
            {/* Answer buttons rather than radios: choosing an answer moves on,
                and re-choosing the same answer after going back still works */}
            <div
              role="group"
              aria-labelledby={`${baseId}-question`}
              className="mt-6 grid gap-3"
            >
              {question.options.map((option) => {
                let selected = answers[question.id] === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => choose(option.value)}
                    className={clsx(
                      'flex min-h-[56px] w-full items-center gap-4 rounded-2xl border px-5 py-3.5 text-left text-[16px] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700',
                      selected
                        ? 'border-forest-700 bg-forest-100 text-forest-900'
                        : 'border-line bg-forest-50 text-ink-700 hover:border-forest-300 hover:bg-white',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        'flex h-5 w-5 flex-none items-center justify-center rounded-full border-2',
                        selected
                          ? 'border-forest-700 bg-forest-700'
                          : 'border-forest-300 bg-white',
                      )}
                    >
                      {selected && (
                        <span className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </span>
                    {option.label}
                  </button>
                )
              })}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={back}
                className="mt-5 py-2 text-[15px] font-semibold text-forest-700 hover:text-forest-900"
              >
                ← Back
              </button>
            )}
          </div>
        ) : (
          <Result result={result} headingRef={headingRef} onRestart={restart} />
        )}
      </div>
    </div>
  )
}

function Result({ result, headingRef, onRestart }) {
  let tone = toneStyles[result.tone]
  let Icon = tone.icon
  let canApply = intake.open && result.tone !== 'no'

  return (
    <div className="flex flex-col gap-5" aria-live="polite">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className={clsx(
            'flex h-12 w-12 flex-none items-center justify-center rounded-2xl',
            tone.badge,
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex flex-col gap-2">
          <h3
            ref={headingRef}
            tabIndex={-1}
            className="font-display text-2xl font-bold leading-snug text-forest-900 outline-none sm:text-[28px]"
          >
            {result.title}
          </h3>
          <p className="text-ink-600">{result.body}</p>
        </div>
      </div>

      {result.tips?.length > 0 && (
        <ul className="flex flex-col gap-2.5 rounded-2xl bg-forest-50 p-5">
          {result.tips.map((tip) => (
            <li key={tip} className="flex gap-3 text-[15px] text-ink-700">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gold"
              />
              {tip}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {canApply && (
          <Button href={site.applyUrl}>
            Start your application
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </Button>
        )}
        <Button
          href={whatsappHref(
            'Hi! I used the eligibility checker and have a question about the Ramzan Scholarship.',
          )}
          variant="secondary"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          Ask us on WhatsApp
        </Button>
        <Button type="button" variant="secondary" onClick={onRestart}>
          Start again
        </Button>
      </div>

      <p className="text-sm text-ink-500">
        This checker is a quick guide, not a decision. Every application is
        reviewed by our team.
      </p>
    </div>
  )
}
