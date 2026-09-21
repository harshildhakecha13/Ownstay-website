'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const GUIDES = [
  {
    id: 'quick-start',
    category: 'Getting Started',
    title: '5-Minute Hotel Onboarding',
    time: '5 min setup',
    description:
      'Step-by-step walkthrough to connect your hotel PMS and launch your first AI agent.',
    steps: [
      '1. Create your Ownstay Hotel Organization and select your property tier.',
      '2. In Settings > Integrations, select your PMS (Opera, Amadeus, Cloudbeds, etc.) and enter your API credentials.',
      '3. Upload your property policy document (check-in times, breakfast hours, pool rules).',
      '4. Test sample queries in the sandbox before switching to live guest mode.',
    ],
  },
  {
    id: 'voice-routing',
    category: 'Voice AI',
    title: 'Configuring Voice AI Phone Numbers',
    time: '8 min setup',
    description:
      'Direct PBX sip-trunking and telephone forwarding for seamless zero-wait answering.',
    steps: [
      '1. Provision a local or toll-free hotel phone number in your Ownstay dashboard.',
      '2. Set up conditional call forwarding from your front desk PBX during peak queue overflow.',
      '3. Customize the greeting speech rate, accent (American, British, Australian, etc.), and brand tone.',
      '4. Enable automatic SMS fallback for instant maps or reservation links sent while the guest is on the phone.',
    ],
  },
  {
    id: 'whatsapp-business',
    category: 'Guest Messaging',
    title: 'WhatsApp Official Business Account Setup',
    time: '10 min setup',
    description:
      'Verify your Meta Business Manager and connect official WhatsApp green-badge messaging.',
    steps: [
      '1. Authorize Meta Business Manager access in Ownstay Settings.',
      '2. Register your official hotel phone number for WhatsApp Business Platform.',
      '3. Configure welcome opt-in templates for pre-arrival guest greeting messages.',
      '4. Enable AI auto-dispatch for in-stay room service and housekeeping requests.',
    ],
  },
  {
    id: 'kitchen-kds',
    category: 'Operations',
    title: 'Connecting Kitchen KDS Stations',
    time: '5 min setup',
    description:
      'Mount tablet displays in kitchen and bar stations for instant ticket fulfillment.',
    steps: [
      '1. Open your custom property station URL on tablet browsers.',
      '2. Assign stations (Hot Line, Cold Prep, Pastry, Cocktail Bar).',
      '3. Food orders placed via guest WhatsApp or QR portal will flash in real-time.',
      '4. Staff tap "Complete" to automatically notify guests that their order is on the way.',
    ],
  },
];

const FAQS = [
  {
    q: 'How does Ownstay prevent AI hallucinations when answering hotel guests?',
    a: 'Ownstay uses strict Retrieval-Augmented Generation (RAG) with localized property vector embeddings. The AI is bounded strictly to your uploaded hotel policies, dining menus, and live PMS data. If a question falls outside verified facts, it politely offers to connect the guest with the front desk team.',
  },
  {
    q: 'Which PMS systems does Ownstay natively support?',
    a: 'We support Oracle Opera (v5 & Cloud), Amadeus, Cloudbeds, StayNTouch, Maestro, Infor HMS, WebRezPro, and generic OpenAPI webhooks.',
  },
  {
    q: 'What languages does the Voice AI and Chat AI support?',
    a: 'Ownstay natively recognizes and responds in 40+ languages including English, Spanish, French, German, Mandarin, Japanese, Arabic, Russian, Portuguese, Italian, Hindi, and Korean.',
  },
  {
    q: 'Is guest data secure and GDPR/CCPA compliant?',
    a: 'Yes. All conversations and PII data are encrypted at rest with AES-256 and in transit with TLS 1.3. We strictly adhere to SOC-2 Type II, GDPR, and PCI-DSS standards.',
  },
];

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState<'guides' | 'faq'>('guides');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredGuides = GUIDES.filter(
    (g) =>
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="overflow-x-hidden min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-b from-slate-50 to-background border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="CommandLineIcon" size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Documentation & Developer Hub
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-5 leading-tight">
              Build with the <span className="text-primary">Ownstay Platform.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore step-by-step onboarding guides, PMS integration specifications, and enterprise
              security documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs & Search */}
      <section className="py-6 bg-background border-b border-border/40 sticky top-16 z-30 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('guides')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'guides'
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'bg-slate-100 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="BookOpenIcon" size={14} />
              Setup Guides
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'faq'
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'bg-slate-100 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="QuestionMarkCircleIcon" size={14} />
              FAQs & Security
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Icon
              name="MagnifyingGlassIcon"
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-medium rounded-full border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* TAB 1: GUIDES */}
          {activeTab === 'guides' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">
                    Onboarding & Integration Guides
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Clear, illustrated instructions to configure channels, PBX lines, and staff KDS
                    displays.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-muted-foreground rounded-full">
                  {filteredGuides.length} Guides Available
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredGuides.map((guide) => (
                  <div
                    key={guide.id}
                    className="p-6 rounded-3xl bg-white border border-border shadow-xs hover:shadow-md transition-all hover:border-primary/40 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
                          {guide.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                          <Icon name="ClockIcon" size={13} />
                          {guide.time}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {guide.description}
                      </p>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-border/60 space-y-2 mb-6">
                        {guide.steps.map((step, idx) => (
                          <div
                            key={idx}
                            className="text-xs text-slate-700 leading-relaxed font-medium"
                          >
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs font-bold text-primary hover:underline cursor-pointer flex items-center gap-1">
                        View Step-by-Step Walkthrough →
                      </span>
                      <Icon
                        name="ArrowTopRightOnSquareIcon"
                        size={14}
                        className="text-muted-foreground"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: FAQS & SECURITY */}
          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground text-sm">
                  Technical, architectural, and security specifics about the Ownstay platform.
                </p>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-border p-6 transition-all hover:border-primary/40 cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-bold text-base text-foreground leading-snug">{faq.q}</h3>
                      <button className="p-1 text-muted-foreground">
                        <Icon
                          name={expandedFaq === index ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                          size={18}
                        />
                      </button>
                    </div>
                    {expandedFaq === index && (
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed pt-4 border-t border-border animate-in fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Security Badge Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-border mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-bold text-base text-foreground mb-1">
                    Enterprise Data Security & Privacy
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    SOC-2 Type II Certified, End-to-End Encryption, GDPR & CCPA Guaranteed.
                  </p>
                </div>
                <Link
                  href="/privacy"
                  className="px-5 py-2.5 rounded-xl bg-white border border-border text-xs font-bold text-foreground hover:border-primary transition-colors shrink-0"
                >
                  Read Security Whitepaper →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
