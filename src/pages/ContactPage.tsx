import { Header, Footer, Section, PageHero } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    content: "For general inquiries, please email us at:",
    link: "mailto:support@dailykart.com",
    linkText: "support@dailykart.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "Our support team is available 24/7:",
    link: "tel:+18005550199",
    linkText: "+1 (800) 555-0199",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "DailyKart Inc. 789 Market Street, Suite 400, San Francisco, CA 94103",
  },
];
export function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Contact Us"
          subtitle="We'd love to hear from you. Here's how you can reach us."
          imageUrl="https://images.unsplash.com/photo-1587560699334-cc426240169f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Section className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-white mb-4">
                    <method.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-display">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground min-h-[40px]">{method.content}</p>
                  {method.link && method.linkText && (
                    <a
                      href={method.link}
                      className="text-brand-green font-semibold hover:underline mt-2 inline-block"
                    >
                      {method.linkText}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}