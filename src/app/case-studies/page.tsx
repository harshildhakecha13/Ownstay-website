'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CaseStudy {
  id: string;
  hotel: string;
  location: string;
  type: 'Luxury Boutique' | 'Business Hotel' | 'Lifestyle Resort';
  rooms: number;
  result: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  metric3: { value: string; label: string };
  summary: string;
  quote: string;
  author: string;
  challenge: string;
  solution: string;
  implementationTime: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'leela-residences',
    hotel: 'The Leela Residences',
    location: 'Bangalore, India',
    type: 'Luxury Boutique',
    rooms: 85,
    result: '62% reduction in front desk calls',
    metric1: { value: '62%', label: 'Fewer front desk calls' },
    metric2: { value: '4.9★', label: 'Guest satisfaction' },
    metric3: { value: '3 min → 0s', label: 'Response time to instant' },
    summary:
      'The Leela Residences deployed Ownstay Voice AI and Guest Chat across all guest touchpoints. Within 60 days, front desk call volume dropped by 62% while guest satisfaction scores reached an all-time high of 4.9/5.',
    quote:
      '"Ownstay handles everything from wake-up calls to restaurant recommendations. Our staff now focuses on what they do best — genuine hospitality."',
    author: 'Preethi Nair, General Manager',
    challenge:
      'High inbound call volume during morning checkout and evening check-in resulted in long lobby lines and guests waiting on telephone hold for simple questions.',
    solution:
      'Integrated Ownstay Voice AI with their on-premise PBX and WhatsApp Business API, auto-resolving 82% of routine queries without front desk intervention.',
    implementationTime: '3 business days',
  },
  {
    id: 'nomad-house-dubai',
    hotel: 'Nomad House Dubai',
    location: 'Dubai, UAE',
    type: 'Business Hotel',
    rooms: 210,
    result: '40% increase in upsell revenue',
    metric1: { value: '+$38,400', label: 'Monthly upsell volume' },
    metric2: { value: '18 languages', label: 'Guest languages handled' },
    metric3: { value: '24/7', label: 'Coverage without extra staff' },
    summary:
      "Nomad House serves guests from 40+ countries. Ownstay's multilingual AI handles check-in queries, room upgrades, and dining reservations in 18 languages — driving a 40% increase in ancillary revenue.",
    quote:
      '"We used to miss upsell opportunities at night. Now Ownstay proactively offers upgrades at the right moment, in the guest\'s own language."',
    author: 'Ahmed Al-Rashid, Revenue Manager',
    challenge:
      'International business guests arriving on red-eye flights struggled with language barriers when inquiring about early check-in, lounge passes, and meeting room rentals.',
    solution:
      'Automated pre-arrival WhatsApp messaging with automated localized currency and language upsell prompts integrated directly with Opera Cloud PMS.',
    implementationTime: '5 business days',
  },
  {
    id: 'surf-stay-bali',
    hotel: 'Surf & Stay Bali',
    location: 'Seminyak, Indonesia',
    type: 'Lifestyle Resort',
    rooms: 45,
    result: '80% of guest queries resolved by AI',
    metric1: { value: '80%', label: 'Queries resolved by AI' },
    metric2: { value: '2 FTE', label: 'Staff hours saved daily' },
    metric3: { value: '98%', label: 'Positive guest reviews' },
    summary:
      "A small team running a high-volume resort. Ownstay's WhatsApp integration means guests get instant answers about surf lessons, spa bookings, and local tips — without interrupting the 2-person front desk team.",
    quote:
      '"We\'re a small property with big guest expectations. Ownstay makes us feel like we have a 24/7 concierge team."',
    author: 'Maya Dewi, Owner',
    challenge:
      'A lean 2-person reception team was overwhelmed responding to repetitive WhatsApp messages regarding surf board rentals, airport taxis, and smoothie bar orders.',
    solution:
      'Deployed Ownstay Hotel Knowledge AI and mobile QR codes in all bungalows, syncing orders directly with the kitchen and rental hut.',
    implementationTime: '2 business days',
  },
];

const CATEGORIES = ['All Properties', 'Luxury Boutique', 'Business Hotel', 'Lifestyle Resort'];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Properties');
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  // Interactive ROI Calculator State
  const [roomsCount, setRoomsCount] = useState(120);
  const [adr, setAdr] = useState(180);

  // Calculations
  const monthlyCallsSaved = Math.round(roomsCount * 22 * 0.65);
  const monthlyHoursSaved = Math.round((monthlyCallsSaved * 3.5) / 60);
  const projectedMonthlyUpsell = Math.round(roomsCount * (adr * 0.08) * 4.2);
  const projectedAnnualSavings = Math.round(
    monthlyHoursSaved * 24 * 12 + projectedMonthlyUpsell * 12
  );

  const filteredCases = CASES.filter(
    (c) => selectedCategory === 'All Properties' || c.type === selectedCategory
  );

  return (
    <main className="overflow-x-hidden min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-b from-slate-50 to-background border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="ChartBarIcon" size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Customer Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-5 leading-tight">
              Real hotels. <span className="text-primary">Measurable ROI.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover how boutique properties, independent resorts, and multi-property chains
              eliminate front desk burnout and capture higher ancillary guest spend with Ownstay.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Hotel Impact Calculator Widget */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <Icon name="SparklesIcon" size={14} />
                Live ROI Calculator
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Calculate your hotel&apos;s potential impact
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Adjust your property size and average room rate to estimate annual labor savings and
                automated upsell revenue.
              </p>

              {/* Slider 1: Rooms */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Property Key Count</span>
                  <span className="text-primary font-mono text-sm">{roomsCount} Rooms</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: ADR */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Average Daily Rate (ADR)</span>
                  <span className="text-primary font-mono text-sm">${adr} / night</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="800"
                  step="10"
                  value={adr}
                  onChange={(e) => setAdr(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Right KPI Card */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Front Desk Hours Saved
                </div>
                <div className="text-3xl font-bold text-white font-mono">
                  {monthlyHoursSaved.toLocaleString()} hrs/mo
                </div>
                <div className="text-xs text-slate-400">
                  ≈ {(monthlyHoursSaved * 12).toLocaleString()} staff hours redirected annually
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Automated Upsell Revenue
                </div>
                <div className="text-3xl font-bold text-emerald-400 font-mono">
                  +${projectedMonthlyUpsell.toLocaleString()}/mo
                </div>
                <div className="text-xs text-slate-400">
                  Via late checkouts, room upgrades & dining
                </div>
              </div>

              <div className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-primary/30 to-orange-500/20 border border-primary/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Estimated Net Annual Economic Value
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white font-mono mt-1">
                    +${projectedAnnualSavings.toLocaleString()} / year
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shrink-0 shadow-lg shadow-primary/30"
                >
                  Get Custom Property Audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Filter */}
      <section className="py-8 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'bg-slate-100 text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {filteredCases.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-3xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                {/* Top Title & Result Badge */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                        {c.type}
                      </span>
                      <span className="text-xs text-muted-foreground bg-slate-100 px-3 py-1 rounded-full font-medium">
                        {c.rooms} rooms
                      </span>
                      <span className="text-xs text-muted-foreground bg-slate-100 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                        <Icon name="MapPinIcon" size={12} />
                        {c.location}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {c.hotel}
                    </h2>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-2.5 text-center">
                    <div className="text-xs font-bold text-emerald-800">{c.result}</div>
                  </div>
                </div>

                {/* Metrics 3-Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 bg-slate-50 rounded-2xl p-5 border border-border">
                  {[c.metric1, c.metric2, c.metric3].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary font-mono mb-1">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.summary}</p>

                {/* Quote Block */}
                <blockquote className="border-l-2 border-primary pl-4 mb-6 bg-orange-50/40 p-4 rounded-r-2xl border-y border-r border-orange-100">
                  <p className="text-sm text-foreground italic mb-2 leading-relaxed">{c.quote}</p>
                  <cite className="text-xs text-muted-foreground not-italic font-bold">
                    — {c.author}
                  </cite>
                </blockquote>

                {/* Action footer */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Live deployment took {c.implementationTime}
                  </span>
                  <button
                    onClick={() => setActiveCase(c)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    View deep dive study →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Case Study Deep Dive Modal */}
      {activeCase && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border p-6 sm:p-8 my-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                {activeCase.type}
              </span>
              <button
                onClick={() => setActiveCase(null)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100"
              >
                <Icon name="XMarkIcon" size={18} />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-foreground tracking-tight mb-2">
              {activeCase.hotel}
            </h2>
            <div className="text-xs text-muted-foreground mb-6">
              {activeCase.location} • {activeCase.rooms} Keys
            </div>

            <div className="space-y-6 text-sm">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                <div className="font-bold text-xs text-rose-950 uppercase tracking-wider mb-1">
                  The Operational Challenge
                </div>
                <p className="text-xs text-rose-900 leading-relaxed">{activeCase.challenge}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="font-bold text-xs text-emerald-950 uppercase tracking-wider mb-1">
                  The Ownstay Solution
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">{activeCase.solution}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-border">
                <div className="font-bold text-xs text-foreground uppercase tracking-wider mb-2">
                  Verified Outcomes
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="font-bold text-primary text-base">
                      {activeCase.metric1.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {activeCase.metric1.label}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base">
                      {activeCase.metric2.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {activeCase.metric2.label}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base">
                      {activeCase.metric3.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {activeCase.metric3.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <Link
                href="/demo"
                onClick={() => setActiveCase(null)}
                className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors"
              >
                Try Interactive Sandbox Demo
              </Link>
              <button
                onClick={() => setActiveCase(null)}
                className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Bottom */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
            Ready to transform your hotel operations?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Book a 20-minute live demonstration tailored to your exact property type and current
            PMS.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm shadow-primary/30"
          >
            Schedule Live Demo Walkthrough
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
