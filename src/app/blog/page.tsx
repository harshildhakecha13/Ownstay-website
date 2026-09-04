'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: { name: string; role: string; avatar: string };
  content: {
    introduction: string;
    keyTakeaways: string[];
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
}

const POSTS: BlogPost[] = [
  {
    slug: 'ai-receptionist-vs-human-front-desk',
    category: 'Industry',
    date: 'August 12, 2026',
    readTime: '6 min read',
    title: 'AI Receptionist vs. Human Front Desk: What Hotels Are Actually Choosing',
    excerpt:
      "The debate isn't AI vs. humans — it's about where each excels. We analyzed 500 hotels to find out how the best properties are blending both.",
    author: { name: 'Arjun Mehta', role: 'Co-Founder & CEO', avatar: 'AM' },
    content: {
      introduction:
        'Over the past two years, hoteliers have faced unprecedented staffing constraints alongside soaring guest expectations for 24/7 instant gratification. Rather than replacing human warm welcomes, high-performing hotels are using conversational AI as an invisible shield that deflects repetitive tasks.',
      keyTakeaways: [
        '84% of front desk inquiries are routine (WiFi codes, breakfast hours, parking permits, late checkout).',
        'Hotels deploying hybrid AI-human front desks report 32% higher staff retention due to eliminated burnout.',
        'Guest satisfaction (CSAT) scores increase when zero-wait responses are guaranteed at 2:00 AM.',
      ],
      sections: [
        {
          heading: '1. The 80/20 Rule in Front Desk Inquiries',
          body: 'When staff spend 4 hours per shift answering "What is the checkout time?" and "Can I store my luggage?", they lose the capacity to greet incoming guests warmly or resolve nuanced guest complaints with empathy. Ownstay AI automates this layer entirely.',
        },
        {
          heading: '2. Zero-Latency Escalation Protocols',
          body: 'The key to successful AI adoption is knowing when NOT to use AI. If a guest expresses distress, billing disputes, or special medical needs, Ownstay detects conversational sentiment and immediately escalates the ticket to the manager on duty with full transcript context.',
        },
        {
          heading: '3. What Top Performing GMs Recommend',
          body: 'Treat your AI receptionist as your top concierge assistant. Train it on your exact property guidebooks, local restaurant recommendations, and standard operating procedures (SOPs).',
        },
      ],
      conclusion:
        'The future of hospitality belongs to hotels that combine high-tech efficiency for routine requests with high-touch human warmth for memorable guest interactions.',
    },
  },
  {
    slug: 'multilingual-guest-communication',
    category: 'Product',
    date: 'July 28, 2026',
    readTime: '4 min read',
    title: 'Why Multilingual Guest Communication Is No Longer Optional',
    excerpt:
      "International travel is back. Guests expect to communicate in their language. Here's how Ownstay handles 40+ languages without losing context.",
    author: { name: 'Priya Sharma', role: 'Co-Founder & CTO', avatar: 'PS' },
    content: {
      introduction:
        'With international tourism surging globally, hospitality operators are welcoming guests from dozens of linguistic backgrounds daily. Expecting front desk staff to speak fluent Japanese, German, Arabic, and French is impossible — but guests still deserve native-quality support.',
      keyTakeaways: [
        'Over 74% of international travelers prefer messaging a hotel in their native language over speaking in English.',
        'Real-time automated translation preserves hotel-specific terms (e.g. "Villa with Plunge Pool", "Club Lounge Access").',
        'Cultural nuance adjustment ensures respectful formality depending on language norms.',
      ],
      sections: [
        {
          heading: 'Beyond Literal Word-for-Word Translation',
          body: 'Standard machine translation frequently misinterprets hospitality jargon. Ownstay uses context-aware language models trained specifically on hotel terminology, preventing embarrassing misunderstandings.',
        },
        {
          heading: 'Instant Two-Way Translation for Human Staff',
          body: 'When your team needs to send a custom message, they can type in English and Ownstay immediately transmits it in the guest’s native dialect on WhatsApp or SMS.',
        },
      ],
      conclusion:
        'Breaking down language barriers transforms an anxious international arrival into a seamless, welcoming five-star experience.',
    },
  },
  {
    slug: 'voice-ai-hotel-calls',
    category: 'Product',
    date: 'July 14, 2026',
    readTime: '5 min read',
    title: 'How Voice AI Is Transforming Hotel Phone Calls',
    excerpt:
      'Phone calls are still the #1 guest touchpoint. Ownstay Voice AI answers every call instantly, routes requests intelligently, and never puts guests on hold.',
    author: { name: 'Rahul Nair', role: 'Head of Product', avatar: 'RN' },
    content: {
      introduction:
        'Despite the rise of messaging apps, telephone calls remain the most urgent communication channel for hotel guests. When a guest calls at 11:00 PM from an airport shuttle, hold music is an instant dealbreaker.',
      keyTakeaways: [
        'Average hotel call answer time drops from 45 seconds to under 800 milliseconds.',
        'Unlimited concurrent call handling ensures zero busy signals during peak check-in rushes.',
        'Complete call transcripts and automated action item tagging sync straight to your hotel PMS.',
      ],
      sections: [
        {
          heading: 'Ultra-Low Latency Conversational Voice',
          body: 'With sub-second response latency and human-like inflection, Ownstay Voice AI converses naturally, handles interruptions gracefully, and accurately clarifies booking details.',
        },
        {
          heading: 'Automated Post-Call Action Items',
          body: 'After every call, the AI generates a structured summary, logs any requested service tickets into the housekeeping or concierge queue, and archives the conversation for QA auditing.',
        },
      ],
      conclusion:
        'Voice AI gives every property the power of a dedicated 24/7 telephone concierge team with zero overhead.',
    },
  },
  {
    slug: 'reducing-front-desk-workload',
    category: 'Operations',
    date: 'June 30, 2026',
    readTime: '7 min read',
    title: '5 Ways Hotels Are Using AI to Reduce Front Desk Workload by 60%',
    excerpt:
      "From check-in FAQs to room service requests, repetitive tasks eat up staff time. Here's how smart hotels are automating the routine.",
    author: { name: 'Sofia Andrade', role: 'Head of Customer Success', avatar: 'SA' },
    content: {
      introduction:
        'Front desk turnover in the hotel industry currently averages 73% annually. The primary culprit cited by staff is repetitive burnout and constant phone interruptions during in-person guest check-ins.',
      keyTakeaways: [
        'Automating pre-arrival check-in communications reduces lobby queues by 48%.',
        'Digital amenity requests allow housekeeping to receive structured tickets directly.',
        'Night audit and shift handover summaries are generated in 15 seconds by AI.',
      ],
      sections: [
        {
          heading: '1. Pre-Arrival Registration & Digital Key Distribution',
          body: 'Send automated WhatsApp registration links 24 hours prior to arrival, capturing ID documents and special requests before the guest steps into the lobby.',
        },
        {
          heading: '2. In-Room QR Concierge Portals',
          body: 'Guests scan a bedside QR code to request extra pillows, towels, or late checkout without calling the front desk.',
        },
        {
          heading: '3. Direct Kitchen & KDS Dispatch',
          body: 'Food and beverage orders route straight to the kitchen display system without manual telephone re-entry.',
        },
      ],
      conclusion:
        'Empower your team with automation, and watch your staff retention and guest review scores flourish.',
    },
  },
  {
    slug: 'whatsapp-hotel-guest-communication',
    category: 'Industry',
    date: 'June 15, 2026',
    readTime: '5 min read',
    title: 'WhatsApp Is Now the #1 Guest Communication Channel. Is Your Hotel Ready?',
    excerpt:
      'Over 70% of hotel guests prefer messaging over calling. WhatsApp integration with Ownstay means every message gets an instant, intelligent reply.',
    author: { name: 'Arjun Mehta', role: 'Co-Founder & CEO', avatar: 'AM' },
    content: {
      introduction:
        'Guests no longer want to download custom hotel mobile apps that they will delete 3 days later. They want to communicate through the apps already on their home screens: WhatsApp, Apple Messages, and SMS.',
      keyTakeaways: [
        'WhatsApp messages achieve a 98% open rate compared to 18% for pre-stay marketing emails.',
        'Rich media support allows sharing property maps, PDF cocktail menus, and directions instantly.',
        'Verified Green Badge WhatsApp Business accounts build immediate trust with guests.',
      ],
      sections: [
        {
          heading: 'The Death of the Native Hotel App',
          body: 'App download friction kills digital adoption. WhatsApp requires zero download, zero password creation, and zero learning curve for guests.',
        },
        {
          heading: 'Automated Broadcasts & Proactive Guest Outreach',
          body: 'Send weather updates, spa promotions, and checkout reminders directly to active stay guests with full opt-in compliance.',
        },
      ],
      conclusion:
        'Meet your guests where they already spend their screen time, and turn messaging into your highest-converting guest channel.',
    },
  },
  {
    slug: 'hotel-ai-roi',
    category: 'Business',
    date: 'May 28, 2026',
    readTime: '8 min read',
    title: 'The Real ROI of AI in Hotels: A Data-Driven Analysis',
    excerpt:
      'We crunched the numbers from 200 hotels using Ownstay. The results: average 40% reduction in front desk queries, 28% increase in upsell revenue.',
    author: { name: 'Priya Sharma', role: 'Co-Founder & CTO', avatar: 'PS' },
    content: {
      introduction:
        'Investing in hospitality technology requires clear, defensible return on investment. We analyzed operational data from 200 partner hotels across 12 months to measure the true financial impact of AI.',
      keyTakeaways: [
        'Average payback period for Ownstay deployment is under 45 days.',
        'Late checkout and room upgrade upsells increased by an average of $4,200 per 50 rooms monthly.',
        'Reduced front desk overtime hours yielded a direct 14% operational expense savings.',
      ],
      sections: [
        {
          heading: 'Direct Revenue Generation via Conversational Upsells',
          body: 'When guests ask "Can I check in early?", AI offers: "Early check-in is available right now for an upgrade fee of $35. Would you like me to confirm this?" with a 41% immediate acceptance rate.',
        },
        {
          heading: 'Labour Optimization and Overtime Reduction',
          body: 'Properties avoided hiring additional seasonal reception staff by letting AI absorb volume spikes during peak holidays.',
        },
      ],
      conclusion:
        'Modern hotel AI is not an overhead expense — it is a proven revenue generator that pays for itself in weeks.',
    },
  },
];

const CATEGORIES = ['All', 'Industry', 'Product', 'Operations', 'Business'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const filteredPosts = POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <main className="overflow-x-hidden min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-b from-slate-50/80 to-background border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="BookOpenIcon" size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Hospitality AI Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-5 leading-tight">
              Insights for modern <span className="text-primary">hoteliers.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real data, tactical guides, and forward-looking hospitality engineering from the team
              powering guest communication across 1,000+ properties.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="py-8 bg-background border-b border-border/40 sticky top-16 z-30 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-sm shadow-primary/30'
                    : 'bg-slate-100 text-muted-foreground hover:text-foreground hover:bg-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Icon
              name="MagnifyingGlassIcon"
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-medium rounded-full border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground bg-slate-50/50 rounded-3xl border border-dashed border-border">
              <Icon
                name="DocumentMagnifyingGlassIcon"
                size={40}
                className="mx-auto mb-3 opacity-40"
              />
              <h3 className="text-lg font-bold text-foreground mb-1">No articles found</h3>
              <p className="text-sm">
                Try adjusting your search terms or selecting another category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured Top Post (if on "All" or matches first item) */}
              {selectedCategory === 'All' && !searchQuery && (
                <div
                  onClick={() => setActivePost(filteredPosts[0])}
                  className="mb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 rounded-3xl p-8 md:p-12 text-white cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute right-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="text-xs font-bold bg-primary text-white px-3 py-1 rounded-full uppercase tracking-wider">
                        Featured Analysis
                      </span>
                      <span className="text-xs text-slate-300 font-medium">
                        {filteredPosts[0].date}
                      </span>
                      <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                        <Icon name="ClockIcon" size={12} />
                        {filteredPosts[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-primary/90 transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold text-primary">
                          {filteredPosts[0].author.avatar}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            {filteredPosts[0].author.name}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {filteredPosts[0].author.role}
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                        Read full article →
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory === 'All' && !searchQuery
                  ? filteredPosts.slice(1)
                  : filteredPosts
                ).map((post) => (
                  <article
                    key={post.slug}
                    onClick={() => setActivePost(post)}
                    className="bg-white rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Icon name="ClockIcon" size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-slate-100 border border-border flex items-center justify-center text-[10px] font-bold text-foreground">
                          {post.author.avatar}
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">
                          {post.author.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Interactive Full Article Reader Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setActivePost(null)}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-border max-h-[90vh] overflow-y-auto p-6 sm:p-10 my-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                  {activePost.category}
                </span>
                <span className="text-xs text-muted-foreground">{activePost.date}</span>
                <span className="text-xs text-muted-foreground">• {activePost.readTime}</span>
              </div>
              <button
                onClick={() => setActivePost(null)}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
                aria-label="Close article"
              >
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>

            {/* Title & Author */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              {activePost.title}
            </h1>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-border mb-8">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                {activePost.author.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{activePost.author.name}</div>
                <div className="text-xs text-muted-foreground">{activePost.author.role}</div>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 mb-8">
              <div className="flex items-center gap-2 font-bold text-sm text-orange-950 mb-3">
                <Icon name="SparklesIcon" size={18} className="text-primary" />
                Executive Summary & Key Takeaways
              </div>
              <ul className="space-y-2">
                {activePost.content.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="text-xs text-orange-900 flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Body Sections */}
            <div className="space-y-8 text-foreground leading-relaxed">
              <p className="text-base text-muted-foreground leading-relaxed font-medium">
                {activePost.content.introduction}
              </p>

              {activePost.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl font-bold text-foreground tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-slate-50 border border-border">
                <h3 className="font-bold text-sm text-foreground mb-2">Final Verdict</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {activePost.content.conclusion}
                </p>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                Want to see this in your hotel?{' '}
                <span className="text-foreground font-semibold">
                  Test the live interactive demo.
                </span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/demo"
                  onClick={() => setActivePost(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 text-center transition-colors shadow-sm"
                >
                  Launch Live Demo
                </Link>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-orange-50/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              Stay Informed
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Get hotel AI insights in your inbox
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-md mx-auto">
            Bi-weekly benchmark reports, guest communication playbooks, and case studies. Zero spam.
          </p>

          {subscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold max-w-md mx-auto inline-flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} className="text-emerald-600" />
              Thank you for subscribing! Check your inbox for our latest report.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="gm@grandazurehotel.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
