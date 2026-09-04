'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface SolutionItem {
  slug: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  stat: string;
  statLabel: string;
  color: string;
}

interface SolutionGroup {
  category: string;
  description: string;
  items: SolutionItem[];
}

interface Props {
  solutionsByAudience: SolutionGroup[];
}

export default function SolutionsExplorer({ solutionsByAudience }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<
    'All' | 'Hotel Leadership' | 'Operational Teams' | 'Property Categories'
  >('All');
  const [activePropertyScale, setActivePropertyScale] = useState<
    'Boutique' | 'Midscale' | 'Resort' | 'Chain'
  >('Boutique');

  const propertyScaleBenchmarks = {
    Boutique: {
      rooms: '20 - 80 Rooms',
      primaryFocus: 'High-touch personalized guest concierge & localized storytelling',
      avgSavings: '$94,000 / year',
      revparLift: '+22.4%',
      recommendedSlug: 'boutique-hotels',
      recommendedTitle: 'Boutique & Heritage Solution',
    },
    Midscale: {
      rooms: '80 - 250 Rooms',
      primaryFocus: 'Eliminating front desk hold queues & zero-friction check-in/out',
      avgSavings: '$180,000 / year',
      revparLift: '+18.4%',
      recommendedSlug: 'front-desk',
      recommendedTitle: 'Front Desk & Reception Solution',
    },
    Resort: {
      rooms: '250 - 600 Rooms',
      primaryFocus: 'Multi-venue cabana, spa, golf & 40+ language voice assistance',
      avgSavings: '$320,000 / year',
      revparLift: '+24.1%',
      recommendedSlug: 'resorts',
      recommendedTitle: 'Resorts & Spa Destinations Solution',
    },
    Chain: {
      rooms: '1,000+ Keys (Multi-Property)',
      primaryFocus: 'Centralized tenant knowledge base, brand consistency & portfolio EBITDA',
      avgSavings: '$1,200,000+ / year',
      revparLift: '+19.8%',
      recommendedSlug: 'hotel-chains',
      recommendedTitle: 'Enterprise Hotel Chains Solution',
    },
  };

  const currentScale = propertyScaleBenchmarks[activePropertyScale];

  const filteredGroups =
    selectedFilter === 'All'
      ? solutionsByAudience
      : solutionsByAudience.filter((g) => g.category === selectedFilter);

  return (
    <div className="space-y-16">
      {/* Interactive Property Scale Navigator */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
          Custom Benchmark Engine
        </div>

        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
            Tailored Hospitality Archetypes
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Select your hotel format to view verified benchmark ROI
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every property category has unique operational dynamics. See how Ownstay customizes AI
            agents for your inventory size.
          </p>
        </div>

        {/* Property Scale Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {(['Boutique', 'Midscale', 'Resort', 'Chain'] as const).map((scale) => (
            <button
              key={scale}
              onClick={() => setActivePropertyScale(scale)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activePropertyScale === scale
                  ? 'bg-orange-500/20 border-orange-500 text-white shadow-lg'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <div className="text-sm font-bold text-white mb-0.5">{scale} Properties</div>
              <div className="text-xs text-orange-400 font-semibold">
                {propertyScaleBenchmarks[scale].rooms}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Benchmark Detail Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Strategic Target Profile
            </div>
            <h3 className="text-xl font-bold text-white">{currentScale.primaryFocus}</h3>
            <div className="flex flex-wrap gap-6 pt-2">
              <div>
                <div className="text-xs text-slate-400">Avg. Annual Labor Savings</div>
                <div className="text-2xl font-black text-emerald-400">
                  {currentScale.avgSavings}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Direct Booking RevPAR Lift</div>
                <div className="text-2xl font-black text-orange-400">{currentScale.revparLift}</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center space-y-3">
            <div className="text-xs text-slate-400 font-medium">Recommended Configuration</div>
            <div className="text-sm font-bold text-white">{currentScale.recommendedTitle}</div>
            <Link
              href={`/solutions/${currentScale.recommendedSlug}`}
              className="inline-flex items-center justify-center gap-1.5 w-full bg-primary hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md"
            >
              View Detailed Blueprint →
            </Link>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4">
        <div className="flex flex-wrap gap-2">
          {(['All', 'Hotel Leadership', 'Operational Teams', 'Property Categories'] as const).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === tab
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-slate-700 border border-border hover:bg-slate-100'
                }`}
              >
                {tab === 'All' ? 'All Solutions (8)' : tab}
              </button>
            )
          )}
        </div>
        <div className="text-xs text-muted-foreground font-semibold">
          Showing {filteredGroups.reduce((acc, g) => acc + g.items.length, 0)} Role Blueprints
        </div>
      </div>

      {/* Solutions Cards Grid */}
      <div className="space-y-16">
        {filteredGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-border/40 pb-3">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{group.category}</h3>
                <p className="text-muted-foreground text-sm mt-0.5">{group.description}</p>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                {group.items.length} Workflows
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  href={`/solutions/${item.slug}`}
                  className="group relative bg-white border border-border/80 rounded-2xl p-7 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon name={item.icon} size={24} />
                      </div>
                      <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
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
                      Explore Solution →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
