import { Navbar } from "@/components/vagamais/navbar"
import { Hero } from "@/components/vagamais/hero"
import FeaturesSection from "@/components/vagamais/features"
import HowItWorksSection from "@/components/vagamais/how-it-works"
import PricingSection from "@/components/vagamais/pricing"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-sky-50/60 to-cyan-50" />
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
          <Navbar />
          <Hero />
        </div>
      </div>

      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
    </main>
  )
}
