import { Navbar } from "@/components/vagamais/navbar"
import { HeroSection } from "@/components/vagamais/hero"
import { FeaturesSection } from "@/components/vagamais/features"
import { HowItWorksSection } from "@/components/vagamais/how-it-works"
import { Footer } from "@/components/vagamais/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </>
  )
}
