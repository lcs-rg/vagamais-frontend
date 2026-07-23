import { Navbar } from "@/features/layout/components/navbar"
import { Hero } from "@/features/landing/components/hero"
import { DashboardPreview } from "@/features/landing/components/dashboard-preview"
import FeaturesSection from "@/features/landing/components/features"
import HowItWorksSection from "@/features/landing/components/how-it-works"
import PricingSection from "@/features/landing/components/pricing"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-teal-50/60 to-emerald-50" />
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
          <Navbar />
          <Hero />
          <DashboardPreview />
        </div>
      </div>

      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
    </main>
  )
}
