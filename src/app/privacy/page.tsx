import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const privacyPrinciples = [
  {
    title: 'We collect only what we need',
    description: 'We use guest data to deliver the service, improve the experience, and support hotel operations. We do not sell personal information.'
  },
  {
    title: 'We protect guest trust',
    description: 'Ownstay uses encryption, access controls, and secure integrations to keep reservation, messaging, and request data protected.'
  },
  {
    title: 'We are transparent',
    description: 'This policy explains what we collect, how we use it, and the choices you have as a guest, hotel operator, or partner.'
  },
];

const dataPoints = [
  'Guest profile details and booking information required to fulfill stays and service requests',
  'Messages, call summaries, and chat transcripts needed to provide hotel support',
  'Device and browser metadata used to maintain security and improve performance',
  'Partner data such as property configuration, staff details, and operational preferences'
];

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-18">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Privacy that protects the guest experience.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Ownstay helps hotels serve guests faster and more consistently. We are committed to handling personal information responsibly and transparently.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="grid md:grid-cols-3 gap-5">
            {privacyPrinciples.map((item) => (
              <div key={item.title} className="bg-muted/30 border border-border rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-3">{item.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/20 border border-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">Information we collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may collect information from guests, hotel staff, and hospitality partners when the service is used. Typical categories include:
            </p>
            <ul className="space-y-3">
              {dataPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold">How we use information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use personal data to support guest messaging, answer requests, route service tickets, maintain booking context, and improve the quality of our AI and support workflows. Hotel teams may also use this data to respond to guest issues and provide better on-property service.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold">Data sharing and processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share information with trusted service providers that help operate the platform, such as cloud hosting, communication tools, and customer support systems. We do not sell personal data. We may also share information when required by law or to protect the safety and rights of users.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold">Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use reasonable administrative, technical, and organizational safeguards to help protect the data we process. No system is completely risk-free, but we continuously monitor and improve our security controls to reduce risk and support compliance expectations.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold">Your choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have rights to access, update, correct, delete, or restrict certain personal information. If you are a guest of a hotel using Ownstay, please contact the property directly for specific requests. If you are a hotel operator or partner, contact our team to review account or data access settings.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Questions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how we process personal information, please contact us.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
