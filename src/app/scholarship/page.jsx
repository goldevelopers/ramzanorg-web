import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Scholarship'
}

export default function Scholarship() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Unlocking Potential: The Power of Scholarships
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            At the Ramzan Talent Scholarship, we believe that every student deserves the opportunity to pursue their education, regardless of their financial circumstances. Scholarships are not just financial aid; they are a bridge to a brighter future, offering students the chance to fulfill their potential and contribute meaningfully to society.
            </p>
            <h2 className='font-bold'>Why Scholarships Matter</h2>
            <p>
            For many students, the path to higher education is fraught with financial challenges. The cost of tuition, books, and other expenses can be overwhelming, often leading to the difficult decision of postponing or even abandoning their educational dreams. Scholarships like the Ramzan Talent Scholarship play a crucial role in alleviating this burden. By providing financial support, we help students focus on their studies, excel academically, and ultimately build successful careers.
            </p>
            <p>
            Scholarships also have a broader impact. They promote equal access to education, ensuring that talented individuals from all walks of life have the chance to achieve their goals. This not only benefits the individual students but also strengthens communities and contributes to the overall development of society. In short, scholarships are an investment in the future—a future where education is accessible to all.
            </p>
            <h2 className='font-bold'>Eligibility Criteria</h2>
            <p>
            The Ramzan Talent Scholarship is open to students who meet the following criteria:
                <ul class="list-disc">
                    <li><strong>Secured Admission:</strong> Applicants must have secured admission in a recognized college or university within Pakistan.</li>
                    <li><strong>Financial Need:</strong> The scholarship is intended for students who face financial difficulties in continuing their education. Applicants should be able to demonstrate that they lack the necessary funds to cover their tuition and other educational expenses.</li>
                    <li><strong>Academic Merit:</strong> While the primary focus is on financial need, academic performance will also be considered in the selection process. Applicants should have a strong academic record, reflecting their dedication and potential for success.</li>
                    <li><strong>Commitment to Education:</strong> Candidates should exhibit a genuine commitment to their studies and a clear understanding of how their education will help them achieve their long-term goals.</li>
                </ul>
                If you meet these criteria, we encourage you to apply for the Ramzan Talent Scholarship. We are here to support you in your educational journey and help you unlock the doors to a brighter future.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:scholarship@ramzan.org.pk"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              scholarship@ramzan.org.pk
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
