import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { AboutUsSection } from "@/components/about-us-section"
import { SafeGamingSection } from "@/components/safe-gaming-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <RatingSection />
      <AboutUsSection />
      <SafeGamingSection />
      <FAQSection />
      <Footer />
      <CookieBanner />
      <CasinoModal />
    </main>
  )
}
