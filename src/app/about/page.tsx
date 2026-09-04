'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Former hospitality tech lead at OYO. Built AI products for 500+ hotels across Asia.',
    initials: 'AM',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Google AI researcher. Specializes in conversational AI and multilingual NLP systems.',
    initials: 'PS',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Rahul Nair',
    role: 'Head of Product',
    bio: 'Designed guest experience platforms for Marriott and IHG. Obsessed with reducing friction.',
    initials: 'RN',
    color: 'bg-stone-100 text-stone-700',
  },
  {
    name: 'Sofia Andrade',
    role: 'Head of Customer Success',
    bio: 'Helped 200+ hotels onboard AI tools. Fluent in English, Spanish, and Portuguese.',
    initials: 'SA',
    color: 'bg-orange-50 text-orange-600',
  },
];

const values = [
  {
    title: 'Guests first, always',
    description:
      'Every feature we build starts with one question: does this make the guest experience better?',
  },
  {
    title: 'Honest AI',
    description:
      "Our AI never pretends to be human. It's transparent, helpful, and knows when to hand off to staff.",
  },
  {
    title: 'Built for operators',
    description:
      "We've worked in hotels. We know the chaos of a busy front desk. Ownstay is built to reduce it.",
  },
  {
    title: 'Multilingual by default',
    description: 'Hospitality is global. Ownstay speaks 40+ languages so no guest ever feels lost.',
  },
];

const milestones = [
  { year: '2022', event: 'Founded in Bangalore. First pilot with a 30-room boutique hotel.' },
  {
    year: '2023',
    event: 'Launched Voice AI. Expanded to 50 properties across India and Southeast Asia.',
  },
  {
    year: '2024',
    event: 'Series A funding. Crossed 200 hotel partners. Launched WhatsApp integration.',
  },
  {
    year: '2025',
    event: 'Expanded to Europe and Middle East. 500+ hotels. 2M+ guest conversations handled.',
  },
  {
    year: '2026',
    event: 'Launched Ownstay 3.0 with full AI Receptionist suite. 1,000+ hotel partners.',
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                About Ownstay
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              We built the AI receptionist
              <br />
              <span className="text-primary">hotels actually needed.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ownstay was born from a simple frustration: guests were waiting too long for answers,
              and hotel staff were drowning in repetitive questions. We set out to fix that — with
              AI that feels human, works 24/7, and integrates with the tools hotels already use.
            </p>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1,000+', label: 'Hotel partners' },
              { value: '2M+', label: 'Guest conversations' },
              { value: '40+', label: 'Languages supported' },
              { value: '98%', label: 'Guest satisfaction rate' },
            ]?.map((stat) => (
              <div key={stat?.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat?.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Our mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To make every hotel guest feel like a VIP — regardless of the size of the property
                or the hour of the night.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We believe AI should augment hospitality, not replace it. Ownstay handles the
                routine so your team can focus on the moments that matter: the warm welcome, the
                personal touch, the problem that needs a human heart to solve.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values?.map((v) => (
                <div key={v?.title} className="bg-muted/40 rounded-2xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{v?.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 tracking-tight">Our journey</h2>
          <div className="flex flex-col gap-0">
            {milestones?.map((m, i) => (
              <div key={m?.year} className="flex gap-8 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                    <span className="text-xs font-bold text-primary">{m?.year?.slice(2)}</span>
                  </div>
                  {i < milestones?.length - 1 && <div className="w-px h-12 bg-border mt-1" />}
                </div>
                <div className="pb-10">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    {m?.year}
                  </span>
                  <p className="text-base text-foreground mt-1 leading-relaxed">{m?.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">The team</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Hospitality veterans and AI engineers who&apos;ve lived the problem we&apos;re solving.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team?.map((member) => (
              <div
                key={member?.name}
                className="bg-muted/30 rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm mb-4 ${member?.color}`}
                >
                  {member?.initials}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-0.5">{member?.name}</h3>
                <p className="text-xs text-primary font-medium mb-3">{member?.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member?.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
            Ready to transform your hotel?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join 1,000+ hotels already using Ownstay to delight guests and free up their teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-xl font-semibold text-sm text-foreground hover:bg-muted/50 transition-colors"
            >
              Explore the Product
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
