import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const cases = [
  {
    hotel: 'The Leela Residences',
    location: 'Bangalore, India',
    type: 'Luxury Boutique',
    rooms: 85,
    result: '62% reduction in front desk calls',
    metric1: { value: '62%', label: 'Fewer front desk calls' },
    metric2: { value: '4.9★', label: 'Guest satisfaction' },
    metric3: { value: '3 min', label: 'Avg. response time → instant' },
    summary: 'The Leela Residences deployed Ownstay Voice AI and Guest Chat across all guest touchpoints. Within 60 days, front desk call volume dropped by 62% while guest satisfaction scores reached an all-time high of 4.9/5.',
    quote: '"Ownstay handles everything from wake-up calls to restaurant recommendations. Our staff now focuses on what they do best — genuine hospitality."',
    author: 'Preethi Nair, General Manager',
  },
  {
    hotel: 'Nomad House Dubai',
    location: 'Dubai, UAE',
    type: 'Business Hotel',
    rooms: 210,
    result: '40% increase in upsell revenue',
    metric1: { value: '40%', label: 'Upsell revenue increase' },
    metric2: { value: '18 languages', label: 'Guest languages handled' },
    metric3: { value: '24/7', label: 'Coverage without extra staff' },
    summary: 'Nomad House serves guests from 40+ countries. Ownstay\'s multilingual AI handles check-in queries, room upgrades, and dining reservations in 18 languages — driving a 40% increase in ancillary revenue.',
    quote: '"We used to miss upsell opportunities at night. Now Ownstay proactively offers upgrades at the right moment, in the guest\'s own language."',
    author: 'Ahmed Al-Rashid, Revenue Manager',
  },
  {
    hotel: 'Surf & Stay Bali',
    location: 'Seminyak, Indonesia',
    type: 'Lifestyle Resort',
    rooms: 45,
    result: '80% of guest queries resolved by AI',
    metric1: { value: '80%', label: 'Queries resolved by AI' },
    metric2: { value: '2 FTE', label: 'Staff hours saved daily' },
    metric3: { value: '98%', label: 'Guest satisfaction maintained' },
    summary: 'A small team running a high-volume resort. Ownstay\'s WhatsApp integration means guests get instant answers about surf lessons, spa bookings, and local tips — without interrupting the 2-person front desk team.',
    quote: '"We\'re a small property with big guest expectations. Ownstay makes us feel like we have a 24/7 concierge team."',
    author: 'Maya Dewi, Owner',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Real hotels. Real results.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how hotels of every size are using Ownstay to transform guest communication and free up their teams.
            </p>
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
          {cases?.map((c, i) => (
            <article key={c?.hotel} className="bg-muted/20 rounded-3xl border border-border overflow-hidden hover:border-primary/20 transition-colors">
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">{c?.type}</span>
                      <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{c?.rooms} rooms</span>
                      <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{c?.location}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">{c?.hotel}</h2>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl px-5 py-3 text-center">
                    <div className="text-sm font-bold text-primary">{c?.result}</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 bg-background rounded-2xl p-5 border border-border">
                  {[c?.metric1, c?.metric2, c?.metric3]?.map((m) => (
                    <div key={m?.label} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary mb-1">{m?.value}</div>
                      <div className="text-xs text-muted-foreground">{m?.label}</div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-muted-foreground leading-relaxed mb-5">{c?.summary}</p>

                {/* Quote */}
                <blockquote className="border-l-2 border-primary/40 pl-4">
                  <p className="text-sm text-foreground italic mb-2">{c?.quote}</p>
                  <cite className="text-xs text-muted-foreground not-italic font-medium">— {c?.author}</cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Ready to write your own success story?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Join 1,000+ hotels already using Ownstay to delight guests and free up their teams.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
            Book a Demo
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
