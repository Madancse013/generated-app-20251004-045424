import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { heroContent, featuresContent, howItWorksContent, ctaContent } from "@shared/content";
import { AnimatedSection } from "./layout";
export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroContent.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight font-display sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {heroContent.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-neutral-200 sm:text-xl"
        >
          {heroContent.subheading}
        </motion.p>
      </div>
    </section>
  );
}
export function FeaturesSection() {
  return (
    <AnimatedSection>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight font-display sm:text-4xl">
          {featuresContent.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {featuresContent.subheading}
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {featuresContent.features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
export function HowItWorksSection() {
  return (
    <AnimatedSection className="bg-muted/50">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight font-display sm:text-4xl">
          {howItWorksContent.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {howItWorksContent.subheading}
        </p>
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {howItWorksContent.steps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src={step.image}
                alt={step.title}
                className="h-64 w-64 rounded-full object-cover shadow-lg"
              />
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white font-bold text-xl font-display">
                {index + 1}
              </div>
            </div>
            <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
export function CtaSection() {
  return (
    <AnimatedSection>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight font-display sm:text-4xl">
          {ctaContent.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {ctaContent.subheading}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-brand-slate hover:bg-brand-slate/90 text-white w-full sm:w-auto" asChild>
            <a href={ctaContent.appStoreUrl} aria-label="Download on the App Store">
              <Apple className="h-6 w-6 mr-2" />
              App Store
            </a>
          </Button>
          <Button size="lg" className="bg-brand-slate hover:bg-brand-slate/90 text-white w-full sm:w-auto" asChild>
            <a href={ctaContent.googlePlayUrl} aria-label="Get it on Google Play">
              <Play className="h-6 w-6 mr-2" />
              Google Play
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}