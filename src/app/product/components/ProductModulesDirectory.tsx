'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ModuleItem {
  slug: string;
  title: string;
  category:
    | 'Reception & Voice'
    | 'Operations & Dispatch'
    | 'Revenue & Intelligence'
    | 'Platform & Security';
  badge: string;
  description: string;
  icon: string;
  stat: string;
  statLabel: string;
}

const ALL_MODULES: ModuleItem[] = [
  {
    slug: 'ownstay-ai-receptionist',
    title: 'Ownstay AI Receptionist',
    category: 'Reception & Voice',
    badge: 'Voice SIP & PBX',
    description:
      'Sub-350ms ultra-low latency voice engine handling inbound/outbound guest calls in 40+ languages.',
    icon: 'SparklesIcon',
    stat: '0.38s',
    statLabel: 'Voice Response Latency',
  },
  {
    slug: 'guest-messaging',
    title: 'Guest CRM & Omnichannel Chat',
    category: 'Reception & Voice',
    badge: 'WhatsApp Verified',
    description:
      'Unified guest communication across WhatsApp, SMS, Web Concierge, and Apple Messages for Business.',
    icon: 'ChatBubbleLeftRightIcon',
    stat: '98.6%',
    statLabel: 'Guest Read Rate',
  },
  {
    slug: 'booking-assistance',
    title: 'Direct Booking & Rate Quoting',
    category: 'Revenue & Intelligence',
    badge: 'Zero OTA Fees',
    description:
      'Instant real-time room availability, rate parity guardrails, and secure PCI-DSS payment tokenization.',
    icon: 'CalendarDaysIcon',
    stat: '+34.2%',
    statLabel: 'Direct Reservation Uplift',
  },
  {
    slug: 'in-stay-support',
    title: 'Room Inventory & In-Stay Concierge',
    category: 'Reception & Voice',
    badge: '24/7 Digital Concierge',
    description:
      'Autonomous keycard re-issuance, late check-out authorization, and localized curated recommendations.',
    icon: 'BuildingOffice2Icon',
    stat: '85%',
    statLabel: 'Autonomous Resolution',
  },
  {
    slug: 'guest-request-management',
    title: 'Housekeeping & Turndown SLA',
    category: 'Operations & Dispatch',
    badge: 'Auto-Dispatch',
    description:
      'Automated guest item dispatch, towel/pillow requests, and housekeeping priority cleaning queues.',
    icon: 'CheckBadgeIcon',
    stat: '4.2 min',
    statLabel: 'Average Ticket Fulfillment',
  },
  {
    slug: 'facility-maintenance',
    title: 'Facility Maintenance & Engineering',
    category: 'Operations & Dispatch',
    badge: 'IoT & Telemetry',
    description:
      'HVAC repair logging, plumbing alerts, and predictive maintenance dispatch connected to PMS assets.',
    icon: 'WrenchScrewdriverIcon',
    stat: '100%',
    statLabel: 'Preventative Work Orders Tracked',
  },
  {
    slug: 'kitchen-kds',
    title: 'Kitchen & KDS Station',
    category: 'Operations & Dispatch',
    badge: 'Live Dining Station',
    description:
      'Digital room service dining, allergen verification, POS folio posting, and prep pacing.',
    icon: 'FireIcon',
    stat: '+28%',
    statLabel: 'In-Room Dining Volume',
  },
  {
    slug: 'hotel-inventory',
    title: 'Hotel Inventory & Linen Asset Tracking',
    category: 'Operations & Dispatch',
    badge: 'Supply Ledger',
    description:
      'Real-time linen, minibar, and consumable stock management with automated supplier reorder thresholds.',
    icon: 'CubeTransparentIcon',
    stat: '-22%',
    statLabel: 'Shrinkage & Stock Waste',
  },
  {
    slug: 'staff-scheduling',
    title: 'Staff & Shift Scheduling',
    category: 'Operations & Dispatch',
    badge: 'Smart Shift Roster',
    description:
      'Predictive occupancy-based staff scheduling, shift swaps, and overtime labor cost controls.',
    icon: 'UserGroupIcon',
    stat: '-14%',
    statLabel: 'Unscheduled Overtime Spend',
  },
  {
    slug: 'yield-analytics',
    title: 'Yield Analytics & RevPAR Engine',
    category: 'Revenue & Intelligence',
    badge: 'Dynamic RevPAR',
    description:
      'Local event demand forecasting, comp-set rate monitoring, and automated ADR price adjustments.',
    icon: 'ChartBarIcon',
    stat: '+18.4%',
    statLabel: 'RevPAR Expansion',
  },
  {
    slug: 'hotel-knowledge-ai',
    title: 'Hotel Knowledge AI & Document Parser',
    category: 'Platform & Security',
    badge: 'RAG & PDF Ingestion',
    description:
      'Instantly ingest property compendiums, restaurant menus, spa schedules, and hotel SOP manuals with zero hallucinations.',
    icon: 'DocumentTextIcon',
    stat: '100%',
    statLabel: 'Hallucination Guardrail Check',
  },
  {
    slug: 'security-compliance',
    title: 'Security, Audit Logs & GDPR Compliance',
    category: 'Platform & Security',
    badge: 'SOC2 & ISO 27001',
    description:
      'Role-based access controls, complete audit trails, biometric PMS encryption, and GDPR guest data deletion.',
    icon: 'ShieldCheckIcon',
    stat: 'SOC2 Type II',
    statLabel: 'Enterprise Certified',
  },
  {
    slug: 'ownstay-platform',
    title: 'Ownstay Core PMS Engine',
    category: 'Platform & Security',
    badge: 'Bi-Directional Sync',
    description:
      'Enterprise integration gateway supporting Oracle Opera, Amadeus, Cloudbeds, StayNTouch, and SALTO locks.',
    icon: 'CpuChipIcon',
    stat: '340ms',
    statLabel: 'PMS Sync Latency',
  },
];

export default function ProductModulesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<
    | 'All'
    | 'Reception & Voice'
    | 'Operations & Dispatch'
    | 'Revenue & Intelligence'
    | 'Platform & Security'
  >('All');

  const filteredModules =
    selectedCategory === 'All'
      ? ALL_MODULES
      : ALL_MODULES.filter((m) => m.category === selectedCategory);

  return (
    <section className="py-20 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest mb-3">
              Platform Architecture
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              All 12 Ownstay Operational Modules
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mt-2 max-w-2xl">
              Explore purpose-built autonomous modules designed to operate independently or as a
              unified hotel operating system.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(
              [
                'All',
                'Reception & Voice',
                'Operations & Dispatch',
                'Revenue & Intelligence',
                'Platform & Security',
              ] as const
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((item, idx) => (
            <Link
              key={idx}
              href={`/product/${item.slug}`}
              className="group bg-white border border-border/80 hover:border-primary/50 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-foreground">{item.stat}</div>
                  <div className="text-[11px] text-muted-foreground">{item.statLabel}</div>
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Module Deep Dive →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
