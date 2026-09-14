'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Props {
  solutionTitle: string;
  category: string;
  badge: string;
}

export default function SolutionInteractiveTools({ solutionTitle, category, badge }: Props) {
  // Calculator State
  const [rooms, setRooms] = useState(120);
  const [adr, setAdr] = useState(210);
  const [shiftsCovered, setShiftsCovered] = useState<1 | 2 | 3>(2);

  // Scenario Simulator State
  const [activeScenario, setActiveScenario] = useState<number>(0);

  // Calculations
  const annualNightLaborSavings = shiftsCovered * 52000;
  const routineCallsSavings = Math.round(rooms * 365 * 0.45 * 4.2); // $ value of front desk hours
  const directBookingUpsell = Math.round(rooms * adr * 0.042 * 365);
  const totalAnnualValue = annualNightLaborSavings + routineCallsSavings + directBookingUpsell;
  const monthlyOwnstayEst = Math.round(rooms * 14.5);
  const paybackMonths = (((monthlyOwnstayEst * 12) / totalAnnualValue) * 12).toFixed(1);

  const scenarios = [
    {
      title: 'Late Night Red-Eye Check-In (2:15 AM)',
      trigger: 'Guest calls hotel PBX while standing at airport arrivals',
      channel: 'Voice AI (SIP Trunk)',
      steps: [
        {
          time: '00.35s',
          text: 'Voice AI answers in guest native accent, pulls reservation #84920 from Opera PMS.',
        },
        {
          time: '01.20s',
          text: 'Confirms flight delay, approves complimentary 2-hour late checkout.',
        },
        {
          time: '02.10s',
          text: 'Generates SALTO mobile keycard link and sends instructions via WhatsApp.',
        },
        { time: '02.45s', text: 'Dispatches luggage assistance alert to night porter on duty.' },
      ],
      result: '100% automated resolution in 42 seconds. Zero hold time. PMS folio synchronized.',
    },
    {
      title: 'Allergen In-Room Dining & Folio Billing',
      trigger: 'Guest texts via WhatsApp: "Can I get dairy-free risotto and wine to Room 602?"',
      channel: 'WhatsApp CRM',
      steps: [
        {
          time: '00.22s',
          text: 'AI parses intent: F&B Room Service order with dietary allergen verification.',
        },
        {
          time: '00.40s',
          text: 'Cross-checks live restaurant menu & kitchen allergen ledger for Dairy-Free certification.',
        },
        {
          time: '00.85s',
          text: 'Posts $54.00 room service charge directly to Room 602 PMS guest folio.',
        },
        {
          time: '01.10s',
          text: 'Dispatches order ticket to Kitchen Display System (KDS Station #1).',
        },
      ],
      result: 'Order received by chef in 1.1 seconds with allergen flag. Zero phone call needed.',
    },
    {
      title: 'Housekeeping Priority Turnover for VIP',
      trigger: 'PMS records early checkout for Penthouse Suite 1402 at 10:15 AM',
      channel: 'PMS & Housekeeping Engine',
      steps: [
        {
          time: '00.15s',
          text: 'Ownstay detects Suite 1402 status change to VACANT_DIRTY in Opera PMS.',
        },
        {
          time: '00.30s',
          text: 'Identifies incoming Titanium VIP arrival assigned to Suite 1402 at 1:30 PM.',
        },
        {
          time: '00.60s',
          text: 'Dynamically shifts Suite 1402 to #1 Priority on Floor 14 Housekeeper tablet.',
        },
        {
          time: '11:45 AM',
          text: 'Supervisor marks INSPECTED -> AI immediately sends pre-arrival key to VIP.',
        },
      ],
      result:
        'Room prepared 1 hour 45 minutes ahead of schedule. VIP delighted with early check-in.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* 1. Interactive Property ROI & Shift Impact Calculator */}
      <div className="bg-white border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary/10 text-primary font-extrabold text-xs px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
          Interactive ROI Engine
        </div>

        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Tailored Financial Impact for {solutionTitle}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Calculate your property&apos;s annual labor savings &amp; RevPAR lift
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Adjust the sliders below to model how Ownstay transforms operational margins for your
            specific room inventory.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">Total Room Inventory</label>
                <span className="text-primary font-black text-base">{rooms} Rooms</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="5"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>20 (Boutique)</span>
                <span>250 (Midscale)</span>
                <span>500+ (Resort/Enterprise)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">Average Daily Rate (ADR)</label>
                <span className="text-primary font-black text-base">${adr} / night</span>
              </div>
              <input
                type="range"
                min="80"
                max="650"
                step="10"
                value={adr}
                onChange={(e) => setAdr(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>$80</span>
                <span>$350</span>
                <span>$650+</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-800 block mb-2">
                Night Shifts Automated with Voice &amp; WhatsApp AI
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((shift) => (
                  <button
                    key={shift}
                    type="button"
                    onClick={() => setShiftsCovered(shift as 1 | 2 | 3)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      shiftsCovered === shift
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {shift} {shift === 1 ? 'Shift (Graveyard)' : 'Shifts (24/7)'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-slate-950 text-white rounded-2xl p-7 border border-slate-800 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                Projected Net Annual Value
              </div>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
                ${totalAnnualValue.toLocaleString()}
                <span className="text-sm font-normal text-slate-400"> / year</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-slate-400 text-[11px] mb-1">Night Staffing Overhead Saved</div>
                <div className="text-lg font-bold text-emerald-400">
                  +${annualNightLaborSavings.toLocaleString()}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-slate-400 text-[11px] mb-1">
                  Direct RevPAR &amp; Upsell Lift
                </div>
                <div className="text-lg font-bold text-orange-400">
                  +${directBookingUpsell.toLocaleString()}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-slate-400 text-[11px] mb-1">Front Desk Hours Recaptured</div>
                <div className="text-lg font-bold text-cyan-400">
                  {Math.round(rooms * 14.2)} hrs / yr
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-slate-400 text-[11px] mb-1">Estimated Payback Period</div>
                <div className="text-lg font-bold text-white">{paybackMonths} Months</div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 text-center bg-primary hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md"
              >
                Request Custom Property Financial Model
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Operational Scenario Simulator */}
      <div className="bg-slate-50 border border-border rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Live Scenario Walkthrough
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Experience how Ownstay resolves real guest situations in seconds
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Select a live hospitality scenario below to inspect the step-by-step autonomous
            execution trace.
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {scenarios.map((sc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScenario(idx)}
              className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeScenario === idx
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-border hover:bg-slate-100'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Active Scenario Card */}
        <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                Channel: {scenarios[activeScenario].channel}
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                &ldquo;{scenarios[activeScenario].trigger}&rdquo;
              </h4>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold shrink-0">
              <Icon name="CheckBadgeIcon" size={16} />
              Autonomous SLA Verified
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {scenarios[activeScenario].steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70"
              >
                <div className="shrink-0 bg-slate-900 text-orange-400 font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {st.time}
                </div>
                <div className="text-xs text-slate-800 font-medium pt-0.5 leading-relaxed">
                  {st.text}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-4 flex items-center justify-between gap-4">
            <div className="text-xs font-semibold text-slate-800">
              <strong className="text-primary">Outcome:</strong> {scenarios[activeScenario].result}
            </div>
            <Link
              href="/contact"
              className="shrink-0 text-xs font-bold text-primary hover:text-orange-700 flex items-center gap-1"
            >
              Book a Walkthrough →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
