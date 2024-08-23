import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="We’ll send you an email any time we publish a new article, or have anything interesting to share that We think you’d want to hear about. You can unsubscribe at any time."
    />
  )
}
