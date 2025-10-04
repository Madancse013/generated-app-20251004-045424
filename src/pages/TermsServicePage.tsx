import { Header, Footer, Section, PageHero } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
export function TermsServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Terms of Service"
          subtitle="Please read these terms carefully before using our service."
          imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Section className="py-16 md:py-24 lg:py-32">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  <em>Last updated: {new Date().toLocaleDateString()}</em>
                </p>
                <p>
                  Welcome to DailyKart! These Terms of Service ("Terms") govern your
                  use of the DailyKart website, mobile applications, and services
                  (collectively, the "Service"), operated by DailyKart Inc. Please
                  read these Terms carefully before using our Service.
                </p>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our Service, you agree to be bound by these
                  Terms and our Privacy Policy. If you do not agree to these Terms,
                  you may not use the Service.
                </p>
                <h2>2. The Service</h2>
                <p>
                  DailyKart provides a quick commerce platform that allows users to
                  order groceries and other household items for delivery. We partner
                  with local stores and vendors to fulfill your orders. Delivery times
                  are estimates and not guaranteed.
                </p>
                <h2>3. User Accounts</h2>
                <p>
                  To use most features of the Service, you must register for an
                  account. You agree to provide accurate, current, and complete
                  information during the registration process. You are responsible for
                  safeguarding your password and for all activities that occur under
                  your account.
                </p>
                <h2>4. Orders, Payments, and Billing</h2>
                <p>
                  You agree to pay for all orders placed through your account. All
                  prices are listed in your local currency and are inclusive of
                  applicable taxes. Payment can be made by credit card, debit card, or
                  other payment methods we make available. In case of item
                  unavailability, we may offer substitutions or a refund for the
                  unavailable item.
                </p>
                <h2>5. Termination</h2>
                <p>
                  We may terminate or suspend your account and bar access to the
                  Service immediately, without prior notice or liability, under our
                  sole discretion, for any reason whatsoever, including, without
                  limitation, a breach of the Terms.
                </p>
                <h2>6. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace
                  these Terms at any time. We will provide at least 30 days' notice
                  prior to any new terms taking effect. By continuing to access or use
                  our Service after any revisions become effective, you agree to be
                  bound by the revised terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  );
}