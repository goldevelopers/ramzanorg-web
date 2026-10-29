import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MobileActionBar } from '@/components/MobileActionBar'

export function Layout({ children }) {
  return (
    <div className="flex min-h-full w-full flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
      <MobileActionBar />
    </div>
  )
}
