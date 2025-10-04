import { Link } from "react-router-dom";
import { motion, HTMLMotionProps } from "framer-motion";
import { ShoppingCart, Twitter, Facebook, Instagram } from "lucide-react";
import { siteConfig, footerContent } from "@shared/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6 text-brand-green" />
          <span className="font-bold font-display text-lg">{siteConfig.name}</span>
        </Link>
        <nav>
          {/* Future nav links can go here */}
        </nav>
      </div>
    </header>
  );
}
const socialIcons = {
  Twitter: <Twitter className="h-4 w-4" />,
  Facebook: <Facebook className="h-4 w-4" />,
  Instagram: <Instagram className="h-4 w-4" />,
};
export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <ShoppingCart className="h-6 w-6 text-brand-green" />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built with ❤️ at Cloudflare.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {footerContent.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {footerContent.socials.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <a href={social.href} aria-label={social.name}>
                {socialIcons[social.name as keyof typeof socialIcons]}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
export function Section({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-24 lg:py-32", className)} {...props}>
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
export function AnimatedSection({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn("py-24 lg:py-32", className)}
      {...props}
    >
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.div>
  );
}
export function PageHero({ title, subtitle, imageUrl }: { title: string; subtitle: string; imageUrl: string; }) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight font-display sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-neutral-200"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}