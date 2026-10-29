import Image from 'next/image'
import Link from 'next/link'

import { ApplicationsPopup } from '@/components/ApplicationsPopup'
import { ArticleCard } from '@/components/ArticleCard'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DaysLeft } from '@/components/DaysLeft'
import { EligibilityChecker } from '@/components/EligibilityChecker'
import {
  ArrowRightIcon,
  BuildingIcon,
  CapIcon,
  WhatsAppIcon,
  CheckIcon,
  StarIcon,
  TargetIcon,
  WalletIcon,
} from '@/components/Icons'
import { Eyebrow, SectionHeading } from '@/components/SectionHeading'
import heroImage from '@/images/photos/image-1.jpg'
import { getAllArticles } from '@/lib/articles'
import { intake, site, whatsappHref } from '@/lib/site'

const stats = [
  { value: '2012', label: 'First scholarships awarded' },
  { value: 'Hundreds', label: 'Of students helped to continue their studies' },
  { value: '100%', label: 'Funded personally by the Qazi Family' },
  { value: 'Online', label: 'Apply from anywhere in Pakistan' },
]

const steps = [
  {
    title: 'Create your account',
    description: 'Sign up on the application portal with your email address.',
  },
  {
    title: 'Fill in the application',
    description:
      'Tell us about your admission, your studies and your family’s financial situation.',
  },
  {
    title: 'Review & selection',
    description:
      'Our team reviews every application on financial need and academic merit, then contacts selected students.',
  },
]

const criteria = [
  {
    icon: BuildingIcon,
    title: 'Secured admission',
    description:
      'You have admission to a diploma, DAE, bachelor’s or master’s programme in Pakistan.',
  },
  {
    icon: WalletIcon,
    title: 'Financial need',
    description:
      'Your family finds it hard to pay your fees. Priority goes to lower-income families.',
  },
  {
    icon: StarIcon,
    title: 'Academic merit',
    description:
      'No minimum percentage, but your results are weighed alongside your need.',
  },
  {
    icon: TargetIcon,
    title: 'No other scholarship',
    description:
      'You aren’t already receiving a scholarship from another organisation.',
  },
]

const legacy = [
  {
    when: 'Early years',
    title: 'Ramzan Welfare Society',
    description:
      'Led by Muhammad Asghar Qazi, the Society set up a library and community hall in Gujrat.',
  },
  {
    when: '2012',
    title: 'The scholarship begins',
    description:
      'A small group of students facing financial hardship receive support for college and university.',
  },
  {
    when: 'Today',
    title: 'A decade-long commitment',
    description:
      'Now run by the sons of Muhammad Asghar Qazi, and still funded entirely by the family.',
  },
]

function Hero() {
  return (
    <section className="bg-forest-50">
      <Container className="flex flex-col items-center gap-14 py-16 sm:py-[88px] lg:flex-row lg:pb-24">
        <div className="flex min-w-0 flex-1 flex-col gap-7">
          <span className="self-start rounded-full border border-forest-200 bg-white px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.02em] text-forest-700">
            Family-funded since 2012 · Gujrat, Pakistan
          </span>
          <h1 className="font-display text-[clamp(2.625rem,6vw,4.75rem)] font-extrabold leading-[1.02] tracking-display text-forest-900">
            No talented student should leave education over{' '}
            <span className="bg-[linear-gradient(transparent_62%,theme(colors.gold.soft)_62%)] text-forest-700">
              money.
            </span>
          </h1>
          <p className="max-w-[560px] text-lg leading-[1.65] text-ink-600 sm:text-[19px]">
            The Ramzan Talent Scholarship helps students across Pakistan finish
            college and university, so they can build careers and give back to
            their communities.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={site.applyUrl}>
              Start your application
              <ArrowRightIcon className="h-[18px] w-[18px]" />
            </Button>
            <Button href="#check-eligibility" variant="secondary">
              Check if you’re eligible
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-600">
            {[
              '100% online',
              'Need + merit based',
              'Any recognised college or university',
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckIcon className="h-[18px] w-[18px] text-forest-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full min-w-0 flex-1">
          <Image
            src={heroImage}
            alt="Graduation cap resting on a globe beside a stack of books"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-[300px] w-full rounded-[32px] object-cover sm:h-[440px] lg:h-[520px]"
            priority
          />
          {intake.open && (
            <div className="absolute bottom-3 left-3 flex flex-col gap-1 rounded-[20px] bg-white px-5 py-4 shadow-float sm:bottom-6 sm:left-6 sm:min-w-[230px] sm:px-[22px] sm:py-5 lg:bottom-8 lg:left-[-24px]">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gold-ink">
                Deadline
              </span>
              <span className="font-display text-2xl font-extrabold leading-tight text-forest-900 sm:text-[30px]">
                {intake.deadlineShort}
              </span>
              <span className="text-sm text-ink-600">
                <DaysLeft />
              </span>
            </div>
          )}
          <div className="absolute right-3 top-3 hidden items-center gap-3 rounded-2xl bg-forest-900 px-[18px] py-3.5 text-white sm:right-5 sm:top-5 sm:flex">
            <CapIcon className="h-[26px] w-[26px] text-gold" />
            <span className="text-sm leading-snug">
              <strong className="font-semibold">Need + merit</strong>
              <br />
              based selection
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Stats() {
  return (
    <section aria-label="At a glance" className="border-b border-[#E3EAE6]">
      <Container
        as="dl"
        className="grid grid-cols-2 gap-x-4 gap-y-8 py-10 sm:py-12 lg:grid-cols-4 lg:gap-8"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse justify-end gap-1"
          >
            <dt className="text-sm text-ink-600 sm:text-[15px]">
              {stat.label}
            </dt>
            <dd className="font-display text-[34px] font-extrabold leading-none tracking-heading text-forest-900 sm:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </Container>
    </section>
  )
}

function HowItWorks() {
  return (
    <section>
      <Container className="flex flex-col gap-12 py-16 sm:gap-14 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="How it works"
            title="Apply in three simple steps"
            className="max-w-[620px]"
          />
          <p className="max-w-[420px] text-ink-600">
            The whole process happens online at {site.applyHost}, so there’s no
            paperwork to post.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-3xl bg-forest-50 p-8"
            >
              <span
                className={
                  index === steps.length - 1
                    ? 'flex h-12 w-12 items-center justify-center rounded-[14px] bg-gold font-display text-xl font-extrabold text-ink-on'
                    : 'flex h-12 w-12 items-center justify-center rounded-[14px] bg-forest-900 font-display text-xl font-extrabold text-white'
                }
              >
                {index + 1}
              </span>
              <h3 className="font-display text-2xl font-bold text-forest-900">
                {step.title}
              </h3>
              <p className="text-ink-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function Eligibility() {
  return (
    <section id="eligibility" className="scroll-mt-24 bg-forest-50">
      <Container className="flex flex-col gap-12 pb-14 pt-16 sm:pb-20 sm:pt-28 lg:flex-row lg:gap-16">
        <SectionHeading
          eyebrow="Who can apply"
          title="Is this scholarship for you?"
          className="lg:w-[360px] lg:flex-none"
        >
          <p className="text-[17px] text-ink-600">
            The scholarship is for students who have the talent and the drive,
            but not the funds, to continue their education.
          </p>
          <Link
            href="/scholarship#criteria"
            className="inline-flex items-center gap-2 self-start py-2.5 font-semibold text-forest-700 hover:text-forest-900"
          >
            Read the full criteria
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </Link>
        </SectionHeading>
        <ul className="grid flex-1 gap-5 sm:grid-cols-2">
          {criteria.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-3 rounded-[20px] border border-line bg-white p-7"
            >
              <item.icon className="h-8 w-8 text-forest-700" />
              <h3 className="font-display text-xl font-bold text-forest-900">
                {item.title}
              </h3>
              <p className="text-[15px] text-ink-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Container
        id="check-eligibility"
        size="narrow"
        className="scroll-mt-24 pb-16 sm:pb-28"
      >
        <h3 className="mb-6 text-center font-display text-2xl font-bold text-forest-900 sm:text-[28px]">
          Not sure? Check in under a minute.
        </h3>
        <EligibilityChecker />
      </Container>
    </section>
  )
}

function Legacy() {
  return (
    <section className="bg-forest-900 text-forest-100">
      <Container className="flex flex-col gap-14 py-16 sm:py-28 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-5">
          <Eyebrow onDark>Our legacy</Eyebrow>
          <h2 className="font-display text-[clamp(2.125rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-heading text-white">
            From a community library in Gujrat to students across Pakistan.
          </h2>
          <p className="text-lg text-forest-500">
            The scholarship honours the memory of Qazi Muhammad Ramzan and
            carries on the Qazi Family’s commitment to education and community
            welfare.
          </p>
          <blockquote className="mt-2 font-display text-xl font-medium leading-[1.4] text-white sm:text-2xl">
            “Education is the key to a brighter future, not just for individuals
            but for the nation as a whole.”
          </blockquote>
          <Button
            href="/about"
            variant="gold"
            size="md"
            className="mt-2 self-start py-3.5"
          >
            Read our story
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </Button>
        </div>
        <ol className="flex flex-1 flex-col">
          {legacy.map((item) => (
            <li
              key={item.when}
              className="flex flex-col gap-2 border-t border-forest-100/20 py-7 last:border-b sm:flex-row sm:gap-6"
            >
              <span className="font-display text-[22px] font-extrabold text-gold sm:w-[120px] sm:flex-none">
                {item.when}
              </span>
              <span className="flex flex-col gap-1.5">
                <strong className="text-lg font-semibold text-white">
                  {item.title}
                </strong>
                <span className="text-forest-500">{item.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function LatestUpdates({ articles }) {
  return (
    <section id="news">
      <Container className="flex flex-col gap-12 py-16 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="News & articles" title="Latest updates" />
          <Link
            href="/articles"
            className="py-2.5 font-semibold text-forest-700 hover:text-forest-900"
          >
            View all articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function CallToAction() {
  return (
    <section>
      <Container className="pb-16 sm:pb-28">
        <div className="flex flex-col gap-8 rounded-[32px] bg-gold-cream px-6 py-10 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-[620px] flex-col gap-3">
            <h2 className="font-display text-[clamp(2rem,4vw,2.875rem)] font-extrabold leading-[1.08] tracking-heading text-forest-900">
              Your education shouldn’t wait.
            </h2>
            <p className="text-lg text-ink-600">
              {intake.open
                ? `Applications for ${intake.year} close on ${intake.deadlineLabel}. Apply online in one sitting from your phone or computer.`
                : 'Applications are currently closed. Follow our news for the next intake.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {intake.open && <Button href={site.applyUrl}>Apply now</Button>}
            <Button
              href={whatsappHref()}
              variant="secondary"
              className="ring-gold-line"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 3)

  return (
    <>
      <ApplicationsPopup />
      <Hero />
      <Stats />
      <HowItWorks />
      <Eligibility />
      <Legacy />
      <LatestUpdates articles={articles} />
      <CallToAction />
    </>
  )
}
