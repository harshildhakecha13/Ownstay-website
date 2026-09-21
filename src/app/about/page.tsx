'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const leadershipTeam = [
  {
    name: 'Ellis Zalavadiya',
    role: 'Co-Founder & Chief Executive Officer (CEO)',
    bio: 'Leads the product vision and autonomous AI architecture, translating deep multi-agent intelligence into seamless hospitality experiences.',
    image: '/images/team/ellis_zalavadiya.jpg',
    badge: 'Vision & Product',
  },
  {
    name: 'Harshil Dhankecha',
    role: 'Co-Founder & Chief Operating Officer (COO)',
    bio: 'Directs hotel brand partnerships, property onboarding, and global operational rollouts across boutique hotels and luxury resorts.',
    image: '/images/team/harshil_dhankecha.jpg',
    badge: 'Operations & Growth',
  },
  {
    name: 'Ujas Diyora',
    role: 'Co-Founder & Chief AI Officer (CAIO)',
    bio: 'Architects domain-specific hospitality reasoning, 40+ language conversational models, and zero-hallucination guest assistance.',
    image: '/images/team/ujas_diyora.jpg',
    badge: 'AI & Research',
  },
  {
    name: 'Kaushal Mistry',
    role: 'Co-Founder & Chief Technology Officer (CTO)',
    bio: 'Engineers sub-second telephony pipelines, real-time PMS integrations (Opera, Cloudbeds, Mews), and enterprise data security.',
    image: '/images/team/kaushal_mistry.jpg',
    badge: 'Engineering & Tech',
  },
];

const hospitalityMetrics = [
  {
    value: '90%',
    label: 'Routine Call & Chat Deflection',
    detail:
      'Answers repetitive guest inquiries about check-in, Wi-Fi, and amenities with zero wait time.',
  },
  {
    value: '24/7/365',
    label: 'Unbroken Front Desk Coverage',
    detail:
      'Never misses a midnight booking inquiry, early flight arrival, or international phone call.',
  },
  {
    value: '40+',
    label: 'Native Guest Languages',
    detail:
      'Instantly communicates with overseas travelers in their mother tongue with cultural fluency.',
  },
  {
    value: '+18%',
    label: 'Direct Booking & Upsell Lift',
    detail:
      'Captures direct reservations and upgrades before guests switch to high-commission OTAs.',
  },
];

const productPillars = [
  {
    title: 'Designed for Real Hospitality',
    description:
      'We believe AI should elevate human connection, not replace it. Ownstay handles repetitive queries so your staff can focus on welcoming guests with true warmth.',
    icon: 'HeartIcon',
    badge: 'Human First',
  },
  {
    title: 'Autonomous Front Desk Co-Pilot',
    description:
      'From answering late-night phone calls to managing WhatsApp room requests and early check-ins, Ownstay operates as a tireless extension of your front office.',
    icon: 'SparklesIcon',
    badge: '24/7 Operation',
  },
  {
    title: 'Deep PMS & Tech Integration',
    description:
      'Ownstay connects directly into your property management system (Opera, Cloudbeds, Mews, Guesty) to verify reservations, update room status, and bill amenities automatically.',
    icon: 'CpuChipIcon',
    badge: 'Live Sync',
  },
  {
    title: 'Enterprise Safety & Data Privacy',
    description:
      'Engineered with strict hospitality compliance, bank-grade encryption, and zero unauthorized guest data sharing. SOC-2 compliant and GDPR-ready.',
    icon: 'ShieldCheckIcon',
    badge: 'Secure',
  },
];

const howItStarted = [
  {
    phase: 'The Problem We Witnessed',
    desc: 'Hotels worldwide are facing unprecedented front desk burnout. Staff spend over 60% of their shift answering the exact same 15 questions about parking, breakfast hours, and Wi-Fi passwords while ringing phones interrupt in-person check-in queues.',
  },
  {
    phase: 'The Solution We Built',
    desc: 'We built Ownstay — an AI receptionist trained specifically on hotel operations. It handles calls, WhatsApp, web chat, and guest requests instantly in 40+ languages, escalating complex situations smoothly to the on-duty manager.',
  },
  {
    phase: 'Backed by OWNTHUM AI',
    desc: 'Ownstay is backed and powered by the autonomous AI engineering foundations of OWNTHUM AI, bringing enterprise-grade multi-agent reasoning, sub-second latency, and rock-solid reliability to modern hotel operations.',
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Ambient warm glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-orange-500/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Tag / Parent Company connection */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F95A1E] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                About Ownstay
              </span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-slate-300">Powered by OWNTHUM AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12]">
              Reimagining hotel <br />
              <span className="text-[#F95A1E] font-medium">hospitality with AI.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Ownstay is the next-generation AI receptionist built to free hotel teams from
              repetitive front desk tasks, elevate the guest journey, and capture 24/7 direct
              booking revenue.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F95A1E] hover:bg-[#e04e17] text-white font-medium text-sm transition-all shadow-lg shadow-orange-500/25 group"
              >
                <span>Book a Demo</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all border border-white/15"
              >
                <span>Explore Features</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hospitalityMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-500/30 transition-all"
              >
                <div className="text-4xl font-extrabold text-[#F95A1E] tracking-tight mb-2">
                  {metric.value}
                </div>
                <div className="text-base font-bold text-slate-900 mb-1">{metric.label}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Why Ownstay Exists */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold tracking-[0.2em] text-[#F95A1E] uppercase">
                Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Giving front desk teams their time back for genuine guest hospitality.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Hotels run on human connection. The warm smile at check-in, personalized local
                recommendations, and thoughtful gestures are what turn first-time guests into
                lifelong patrons.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Yet today, front desk staff spend hours answering repetitive telephone calls,
                manually checking Wi-Fi passwords, quoting parking rates, and resolving room service
                requests. Phones ring off the hook while guests stand waiting in the lobby.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We created <strong>Ownstay</strong> to change that. Ownstay acts as a tireless,
                intelligent front desk co-pilot that works 24/7 across calls, WhatsApp, web chat,
                and SMS. It resolves 90% of routine questions instantly and accurately, freeing your
                team to deliver high-touch, memorable hospitality.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-200">
                <div>
                  <div className="text-xl font-bold text-slate-900">0s</div>
                  <div className="text-xs text-slate-500">Wait Time for Guests</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500">Call Answer Rate</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-xl font-bold text-slate-900">40+</div>
                  <div className="text-xs text-slate-500">Languages Supported</div>
                </div>
              </div>
            </div>

            {/* The Story / Evolution Cards */}
            <div className="lg:col-span-5 space-y-4">
              {howItStarted.map((step, idx) => (
                <div
                  key={step.phase}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-[#F95A1E] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">{step.phase}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-9">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Product Pillars */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14 text-left">
            <div className="text-xs font-bold tracking-[0.2em] text-[#F95A1E] uppercase mb-2">
              Our Core Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Built for hoteliers, by hospitality &amp; AI specialists.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every feature in Ownstay is engineered with one standard in mind: how will this
              improve the guest experience and ease the daily workload of hotel staff?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-500/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F95A1E] flex items-center justify-center font-bold">
                      <Icon name={pillar.icon} size={22} />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <div className="text-xs font-bold tracking-[0.2em] text-[#F95A1E] uppercase mb-2">
              The People Behind Ownstay
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Meet the leadership team
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our founding team combines deep expertise in autonomous AI architecture, hospitality
              operations, and high-reliability cloud systems to modernize hotel guest engagement.
            </p>
          </div>

          {/* 4 Team Member Cards with authentic photos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-orange-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Photo */}
                <div className="relative aspect-[4/4.5] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-white tracking-wide border border-white/10">
                    {member.badge}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#F95A1E] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#F95A1E] mb-3 leading-snug">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Company: OWNTHUM AI Backing Spotlight */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-orange-400 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Parent Company &amp; Technology Backing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Powered by the engineering foundations of OWNTHUM AI.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ownstay is developed by the team at <strong>OWNTHUM AI</strong>, an autonomous AI
                innovations company dedicated to bridging the gap between operational complexity and
                human efficiency. With enterprise multi-agent pipelines and real-time reasoning,
                Ownstay delivers unmatched speed and reliability to hotels worldwide.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto">
              <a
                href="https://ownthum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20"
              >
                <span>Visit ownthum.com</span>
                <span>↗</span>
              </a>
              <a
                href="https://ownthum.com/about.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 font-medium text-sm transition-all border border-orange-500/30"
              >
                <span>Ownthum AI Story</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Upgrade Your Hotel Front Desk CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/40">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F95A1E] text-xs font-bold uppercase tracking-wider">
            Transform Your Hotel Front Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to give your front desk team their time back?
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how Ownstay handles phone calls, room requests, and direct reservations live in a
            tailored 15-minute demo configured for your property.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#F95A1E] hover:bg-[#e04e17] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
            >
              <span>Book a Demo</span>
              <span>→</span>
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all border border-slate-300 shadow-sm"
            >
              <span>Explore Features</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
