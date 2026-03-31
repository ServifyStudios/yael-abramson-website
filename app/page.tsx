import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Conversations from '@/components/Conversations'
import WhoAmI from '@/components/WhoAmI'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Conversations />
        <WhoAmI />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
