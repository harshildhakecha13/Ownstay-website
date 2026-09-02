import Header from '@/components/Header';
import Footer from '@/components/Footer';

const termsSections = [
  {
    title: '1. Service overview',
    content: 'Ownstay provides AI-powered guest communication and hotel operations tools designed to help hospitality teams answer guest requests faster, improve service consistency, and reduce repetitive front desk work.'
  },
  {
    title: '2. Eligibility and accounts',
    content: 'You must be authorized to use the Service on behalf of a hotel, property, or hospitality business. You are responsible for maintaining the confidentiality of your account credentials and for the activity that occurs under your account.'
  },
  {
    title: '3. Acceptable use',
    content: 'You may not use the Service to send spam, unlawful content, or misleading messages. You may not attempt to reverse engineer, overload, or interfere with the Service or use it in a way that harms guests, hotel staff, or third parties.'
  },
  {
    title: '4. Data and guest communications',
    content: 'Hotels remain responsible for the accuracy of their property information, policies, and operational data used in the platform. Ownstay acts as a service provider to help process and route guest communications according to customer configuration.'
  },
  {
    title: '5. Intellectual property',
    content: 'The Service, branding, design, content, and related materials remain the property of Ownstay or its licensors. You may use the Service only under the terms of your agreement and may not copy, resell, or redistribute the platform without express permission.'
  },
  {
    title: '6. Limits of service',
    content: 'Ownstay aims to provide a reliable and high-quality experience, but no service is guaranteed to be uninterrupted or error-free. We may suspend or modify features to improve performance, security, or compliance.'
  },
  {
    title: '7. Liability and warranties',
    content: 'The Service is provided on an “as is” basis. We do not guarantee that every guest interaction will be perfect or that the Service will eliminate all human oversight. Our liability is limited to the extent permitted by applicable law.'
  },
  {
    title: '8. Termination',
    content: 'Either party may terminate access according to their agreement. Upon termination, we may disable access to the platform and related accounts in accordance with contract and security requirements.'
  },
];

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Terms for using Ownstay.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            These terms explain how the Ownstay Service may be used by hotels, operators, and teams that rely on our AI guest communication platform.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {termsSections.map((section) => (
            <div key={section.title} className="bg-muted/20 border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-3">Updates to these terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these terms from time to time to reflect changes in the Service, legal requirements, or best practices. Continued use of the platform after updates indicates acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}