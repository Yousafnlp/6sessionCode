import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Story from "@/components/Story"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Header />
      <Hero />
      <Story />
      <Services />
      <Testimonials/>
      <Contact />
    </main>
  )
}

