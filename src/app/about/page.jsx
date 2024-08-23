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
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
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
            From Humble Beginnings to Lasting Impact: The Legacy of the Ramzan Talent Scholarship
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            The Ramzan Talent Scholarship has its roots in the deep commitment of the 
            Qazi Family to education and community welfare. Our journey began long 
            before the scholarship was officially established in 2012. In the early years, 
            the Ramzan Welfare Society, under the leadership of <em>Muhammad Asghar Qazi</em>, 
            was actively involved in various community initiatives in our hometown of Gujrat, 
            Pakistan. The Society set up a library and a community hall, creating 
            a space for learning and growth in the local community.
            </p>
            <p>
            This initiative was deeply personal for <em>Muhammad Asghar Qazi</em>, who dedicated it 
            to the memory of his father, Qazi Muhammad Ramzan, and was supported tirelessly 
            by his sister, <em>Parveen Afza</em> (Late). Their shared vision was to uplift 
            the community through education and access to resources, planting 
            the seeds for what would later become the Ramzan Talent Scholarship.
            </p>
            <p>
            The Ramzan Talent Scholarship was born out of a desire to extend this 
            vision beyond the local community. Starting modestly in 2012, 
            we began by supporting a small group of students who faced 
            financial difficulties in continuing their college and university 
            education. What started as a small effort has grown into a 
            decade-long commitment to education in Pakistan.
            </p>
            <p>
            Our mission is simple yet profound: to ensure that no talented student 
            is forced to abandon their academic dreams due to financial constraints. 
            The Qazi Family personally funds this scholarship, continuing the 
            legacy of community service that began with the Ramzan Welfare Society. 
            We believe that education is the key to a brighter future, not just for 
            individuals but for the nation as a whole.
            </p>
            <p>
            Today, the Ramzan Talent Scholarship is managed by the sons of <em>Muhammad Asghar Qazi</em>, 
            who have taken up the mantle to continue this noble cause. 
            Their dedication to promoting education and nurturing talent reflects the values 
            instilled in them by their father and aunt. The scholarship stands as a 
            testament to the enduring legacy of Qazi Muhammad Ramzan and <em>Parveen Afza</em>, 
            and the unwavering commitment of the Qazi Family to making a 
            difference in the lives of young students across Pakistan.
            </p>
            <p>
            As we look to the future, our commitment remains as strong as ever. 
            We are proud to carry forward this mission, helping more students 
            achieve their educational goals and empowering the next generation 
            of leaders in Pakistan.
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
