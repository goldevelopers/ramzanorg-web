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
// guide only: the scholarship team makes the final decision. An option
// marked `blocks` ends the checker with a "not eligible" result.
const questions = [
  {
    id: 'level',
    title: 'What will you be studying?',
    options: [
      { value: 'diploma', label: 'A diploma or DAE' },
      { value: 'bachelors', label: 'A bachelor’s degree (BS, BA, BSc, etc.)' },
      { value: 'masters', label: 'A master’s degree' },
      {
        value: 'school',
        label: 'Intermediate (FA/FSc) or school',
        blocks: true,
      },
    ],
  },
  {
    id: 'admission',
    title:
      'Have you secured admission at a recognised institution in Pakistan?',
    options: [
      { value: 'yes', label: 'Yes, I have admission' },
      { value: 'waiting', label: 'Not yet, I’m waiting for admission' },
      { value: 'no', label: 'No', blocks: true },
    ],
  },
  {
    id: 'other',
    title:
      'Are you already receiving a scholarship from another institution or organisation?',
    options: [
      { value: 'no', label: 'No' },
      {
        value: 'yes',
        label: 'Yes, I already have a scholarship',
        blocks: true,
      },
    ],
  },
  {
    id: 'need',
    title: 'Is it difficult for you or your family to pay your tuition fees?',
    options: [
      { value: 'yes', label: 'Yes, we can’t cover the fees' },
      { value: 'partly', label: 'We can cover some, but not all' },
      { value: 'no', label: 'No, we can afford them', blocks: true },
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
]

const notEligible = {
  level: {
    title: 'This level of study isn’t covered',
    body: 'The scholarship supports diploma (including DAE), bachelor’s and master’s students. It doesn’t cover school or intermediate (FA/FSc) education. You’re welcome to apply once you start a diploma or degree.',
  },
  admission: {
    title: 'Secure your admission first',
    body: 'The scholarship supports students who already have admission at a recognised institution in Pakistan. Once you have your admission, come back and check again.',
  },
  other: {
    title: 'You can’t hold two scholarships',
    body: 'Students who already receive a scholarship from another institution or organisation aren’t eligible. If your current scholarship ends, you’re welcome to apply.',
  },
  need: {
    title: 'This scholarship may not be the right fit',
    body: 'The Ramzan Talent Scholarship gives priority to students from families with lower incomes, so students who can afford their fees are unlikely to be selected.',
  },
}

function getResult(answers) {
  let blocked = questions.find((question) =>
    question.options.some(
      (option) => option.blocks && answers[question.id] === option.value,
    ),
  )
  if (blocked) {
    return { tone: 'no', ...notEligible[blocked.id] }
  }

  let tips = []
  if (answers.admission === 'waiting') {
    tips.push(
      `You’ll need confirmed admission to apply, so make sure it comes through before ${intake.deadlineLabel}.`,
    )
  }
  if (answers.merit !== 'strong') {
    tips.push(
      'There’s no minimum percentage, but selection weighs your results alongside your financial need, so describe your effort and progress in your application.',
    )
  }
  tips.push(
    'Girls and orphan students are given preference, so mention it in your application if this applies to you.',
  )

  if (answers.admission === 'waiting') {
    return {
      tone: 'maybe',
      title: 'You can apply once you’re admitted',
      body: 'You match what the scholarship looks for. As soon as your admission is confirmed, you’ll be ready to apply.',
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
  // The questions shown so far, so Back retraces the student's own path
  let [history, setHistory] = useState([])
  let headingRef = useRef(null)
  let baseId = useId()

  let finished = step >= questions.length
  let question = questions[Math.min(step, questions.length - 1)]
  let result = finished ? getResult(answers) : null

  function focusHeading() {
    // Move focus to the new question or result for keyboard and screen reader users
    requestAnimationFrame(() => headingRef.current?.focus())
  }

  function choose(option) {
    setAnswers({ ...answers, [question.id]: option.value })
    setHistory([...history, step])
    // A blocking answer goes straight to the result
    setStep(option.blocks ? questions.length : step + 1)
    focusHeading()
  }

  function back() {
    setStep(history.length > 0 ? history[history.length - 1] : 0)
    setHistory(history.slice(0, -1))
    focusHeading()
  }

  function restart() {
    setAnswers({})
    setHistory([])
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
            Five quick questions. Takes under a minute.
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
                    onClick={() => choose(option)}
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
          <Result
            result={result}
            headingRef={headingRef}
            onBack={back}
            onRestart={restart}
          />
        )}
      </div>
    </div>
  )
}

function Result({ result, headingRef, onBack, onRestart }) {
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

      <button
        type="button"
        onClick={onBack}
        className="self-start py-1 text-[15px] font-semibold text-forest-700 hover:text-forest-900"
      >
        ← Change my last answer
      </button>

      <p className="text-sm text-ink-500">
        This checker is a quick guide, not a decision. Every application is
        reviewed by our team.
      </p>
    </div>
  )
}
