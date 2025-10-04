import { Header, Footer, Section, PageHero } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
export function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Privacy Policy"
          subtitle="Your privacy is important to us. Here's how we protect your data."
          imageUrl="https://images.unsplash.com/photo-1550751827-4138d04d405b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Section className="py-16 md:py-24 lg:py-32">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  <em>Last updated: {new Date().toLocaleDateString()}</em>
                </p>
                <p>
                  DailyKart ("us", "we", or "our") operates the DailyKart mobile
                  application (the "Service"). This page informs you of our policies
                  regarding the collection, use, and disclosure of personal data when
                  you use our Service and the choices you have associated with that
                  data. We use your data to provide and improve the Service. By using
                  the Service, you agree to the collection and use of information in
                  accordance with this policy.
                </p>
                <h2>1. Information We Collect</h2>
                <p>
                  We collect several different types of information for various
                  purposes to provide and improve our Service to you. This may include:
                </p>
                <ul>
                  <li>
                    <strong>Personal Identification Information:</strong> Name, email
                    address, phone number, delivery address, and payment information.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information on how the Service is
                    accessed and used, including your device's IP address, browser
                    type, pages visited, and time spent on those pages.
                  </li>
                  <li>
                    <strong>Location Data:</strong> We may use and store information
                    about your location if you give us permission to do so, to provide
                    features of our Service, such as verifying your address and
                    ensuring timely delivery.
                  </li>
                </ul>
                <h2>2. How We Use Your Information</h2>
                <p>
                  DailyKart uses the collected data for various purposes:
                </p>
                <ul>
                  <li>To provide and maintain our Service</li>
                  <li>To process your transactions and manage your orders</li>
                  <li>To notify you about changes to our Service</li>
                  <li>
                    To provide customer care and support
                  </li>
                  <li>
                    To personalize your experience and to allow us to deliver the type
                    of content and product offerings in which you are most interested.
                  </li>
                  <li>To monitor the usage of our Service and detect, prevent and address technical issues</li>
                </ul>
                <h2>3. Data Security</h2>
                <p>
                  The security of your data is important to us. We adopt appropriate
                  data collection, storage, and processing practices and security
                  measures to protect against unauthorized access, alteration,
                  disclosure, or destruction of your personal information, username,
                  password, transaction information, and data stored on our Service.
                </p>
                <h2>4. Sharing Your Personal Information</h2>
                <p>
                  We do not sell, trade, or rent users' personal identification
                  information to others. We may share generic aggregated demographic
                  information not linked to any personal identification information
                  regarding visitors and users with our business partners, trusted
                  affiliates, and advertisers for the purposes outlined above. We may use
                  third-party service providers to help us operate our business and the
                  Service or administer activities on our behalf, such as sending out
                  newsletters or surveys.
                </p>
                <h2>5. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify
                  you of any changes by posting the new Privacy Policy on this page. You
                  are advised to review this Privacy Policy periodically for any
                  changes.
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