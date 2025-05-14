import { HeroSection } from "@/components/hero-section"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactCTA } from "@/components/contact-cta"
import { ImageGallery } from "@/components/image-gallery"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <Services />
      <About />
      <ImageGallery />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  )
}
