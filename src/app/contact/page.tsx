import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactInfo from '@/app/contact/components/ContactInfo';

export const metadata: Metadata = {
  title: 'Book a Demo — Ownstay AI Receptionist for Hotels',
  description:
    'Book a personalized demo of Ownstay and see how AI can transform guest communication at your hotel.',
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <section className="pt-32 pb-16 bg-background" aria-label="Book a demo">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span
                className="w-2 h-2 rounded-full bg-primary animate-pulse-ring"
                aria-hidden="true"
              />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Book a Demo
              </span>
            </div>
            <h1 className="text-section-xl font-bold text-foreground tracking-tight mb-5">
              See Ownstay in action.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Book a personalized demo and discover how Ownstay can transform guest communication at
              your hotel. Our team will walk you through the platform and answer your questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            {/* Info */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
