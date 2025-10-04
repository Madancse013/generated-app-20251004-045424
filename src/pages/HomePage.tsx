import { Header, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  CtaSection,
} from "@/components/sections";
export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}