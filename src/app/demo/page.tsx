import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Interactive Demo — OwnStay by OWNTUM AI',
  description:
    'Explore the OwnStay platform through live interactive demos of the Admin Suite, Kitchen KDS, and Guest Concierge Portal.',
};

const demos = [
  {
    id: 'admin',
    href: '/demo/admin',
    label: 'Admin Operations Suite',
    sublabel: 'Desktop View',
    description:
      'Full-property dashboard with occupancy metrics, AI intelligence feed, interactive Gantt timeline, and 5-step check-in wizard.',
    features: ['Dashboard KPIs', 'AI Intelligence Feed', 'Gantt Room Timeline', 'Check-in Wizard'],
    accent: '#E85D04',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="4" width="18" height="18" rx="3" fill="#E85D04" opacity="0.15" />
        <rect x="4" y="4" width="18" height="18" rx="3" stroke="#E85D04" strokeWidth="1.5" />
        <rect
          x="26"
          y="4"
          width="18"
          height="10"
          rx="3"
          fill="#E85D04"
          opacity="0.1"
          stroke="#E85D04"
          strokeWidth="1.5"
        />
        <rect
          x="26"
          y="18"
          width="18"
          height="10"
          rx="3"
          fill="#E85D04"
          opacity="0.1"
          stroke="#E85D04"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="26"
          width="40"
          height="18"
          rx="3"
          fill="#E85D04"
          opacity="0.08"
          stroke="#E85D04"
          strokeWidth="1.5"
        />
        <circle cx="13" cy="13" r="3" fill="#E85D04" />
      </svg>
    ),
  },
  {
    id: 'kitchen',
    href: '/demo/kitchen',
    label: 'Kitchen Operations & KDS',
    sublabel: 'Desktop / Tablet View',
    description:
      'Live kitchen display system with Kanban ticket board, station capacity load balancing, and inventory stock management.',
    features: ['Live KDS Kanban', 'Station Load Meters', 'Inventory Table', 'Requisition Flow'],
    accent: '#2D6A4F',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect
          x="4"
          y="20"
          width="40"
          height="6"
          rx="2"
          fill="#2D6A4F"
          opacity="0.15"
          stroke="#2D6A4F"
          strokeWidth="1.5"
        />
        <rect
          x="8"
          y="26"
          width="8"
          height="18"
          rx="2"
          fill="#2D6A4F"
          opacity="0.12"
          stroke="#2D6A4F"
          strokeWidth="1.5"
        />
        <rect
          x="20"
          y="26"
          width="8"
          height="14"
          rx="2"
          fill="#E09F3E"
          opacity="0.2"
          stroke="#E09F3E"
          strokeWidth="1.5"
        />
        <rect
          x="32"
          y="26"
          width="8"
          height="10"
          rx="2"
          fill="#9E2A2B"
          opacity="0.15"
          stroke="#9E2A2B"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="10"
          r="6"
          fill="#2D6A4F"
          opacity="0.15"
          stroke="#2D6A4F"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="10"
          r="6"
          fill="#2D6A4F"
          opacity="0.1"
          stroke="#2D6A4F"
          strokeWidth="1.5"
        />
        <circle
          cx="36"
          cy="10"
          r="6"
          fill="#2D6A4F"
          opacity="0.08"
          stroke="#2D6A4F"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: 'guest',
    href: '/demo/guest',
    label: 'Guest Concierge Portal',
    sublabel: 'Mobile View',
    description:
      'Complete in-room guest experience portal with dining, housekeeping requests, maintenance tickets, and live order tracking.',
    features: [
      'In-Room Dining',
      'Housekeeping Orders',
      'Maintenance Tickets',
      'Live Order Timeline',
    ],
    accent: '#6366F1',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect
          x="12"
          y="4"
          width="24"
          height="40"
          rx="5"
          fill="#6366F1"
          opacity="0.1"
          stroke="#6366F1"
          strokeWidth="1.5"
        />
        <rect x="17" y="9" width="14" height="3" rx="1.5" fill="#6366F1" opacity="0.4" />
        <rect
          x="16"
          y="16"
          width="16"
          height="10"
          rx="2"
          fill="#6366F1"
          opacity="0.12"
          stroke="#6366F1"
          strokeWidth="1"
        />
        <rect
          x="16"
          y="30"
          width="7"
          height="7"
          rx="1.5"
          fill="#6366F1"
          opacity="0.15"
          stroke="#6366F1"
          strokeWidth="1"
        />
        <rect
          x="25"
          y="30"
          width="7"
          height="7"
          rx="1.5"
          fill="#6366F1"
          opacity="0.1"
          stroke="#6366F1"
          strokeWidth="1"
        />
        <circle cx="24" cy="42" r="2" fill="#6366F1" opacity="0.4" />
      </svg>
    ),
  },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: '#FAF8F5' }}>
      <Header />
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase border"
              style={{ background: '#FFF4EE', borderColor: '#FDDCCA', color: '#E85D04' }}
            >
              ✦ Interactive Product Demo
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
              style={{ color: '#1A1A1A', lineHeight: 1.08 }}
            >
              Experience OwnStay
              <br />
              <span style={{ color: '#E85D04' }}>in action</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Three fully interactive UI modules — from hotel admin operations to kitchen management
              and guest concierge — all showcasing the full power of the Ownstay platform.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <Link key={demo.id} href={demo.href} className="group block">
                <div
                  className="bg-white rounded-2xl border h-full flex flex-col p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: '#EAEAEA',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="mb-6 p-3 rounded-xl w-fit"
                    style={{ background: `${demo.accent}0F` }}
                  >
                    {demo.icon}
                  </div>

                  {/* Label */}
                  <div
                    className="text-[11px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: demo.accent }}
                  >
                    {demo.sublabel}
                  </div>
                  <h2 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                    {demo.label}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {demo.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {demo.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${demo.accent}10`, color: demo.accent }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 font-bold text-sm transition-all group-hover:gap-3"
                    style={{ color: demo.accent }}
                  >
                    Launch Demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
