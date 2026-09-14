import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';
import SolutionsExplorer from '@/app/solutions/components/SolutionsExplorer';

export const metadata: Metadata = {
  title: 'Hospitality AI Solutions — Ownstay',
  description:
    'Tailored AI orchestration for hotel owners, general managers, front desk, housekeeping, F&B teams, boutique hotels, luxury resorts, and enterprise chains.',
};

const solutionsByAudience = [
  {
    category: 'Hotel Leadership',
    description:
      'Strategic oversight, RevPAR optimization, EBITDA expansion, and portfolio intelligence.',
    items: [
      {
        slug: 'hotel-owners',
        title: 'Hotel Owners & Asset Managers',
        badge: 'ROI & EBITDA',
        description:
          'Maximize asset yield, eliminate $180k/yr in redundant night staffing overhead, and receive automated weekly portfolio EBITDA reports.',
        icon: 'BuildingOffice2Icon',
        stat: '+18.4%',
        statLabel: 'Average RevPAR Lift',
        color: 'from-amber-500/20 to-orange-500/10',
      },
      {
        slug: 'general-managers',
        title: 'General Managers & Operations Directors',
        badge: 'Autopilot Ops',
        description:
          'Unified operations cockpit connecting front desk, engineering, housekeeping, and guest concierge into a synchronized SLA workflow.',
        icon: 'UserGroupIcon',
        stat: '4.2 min',
        statLabel: 'Avg Ticket Resolution',
        color: 'from-blue-500/20 to-cyan-500/10',
      },
    ],
  },
  {
    category: 'Operational Teams',
    description:
      'Ground-level dispatch, zero-wait guest services, and seamless departmental handoffs.',
    items: [
      {
        slug: 'front-desk',
        title: 'Front Desk & Reception',
        badge: 'Zero-Wait',
        description:
          'Automate routine check-in inquiries, keycard activation, luggage storage, and late check-out requests with multilingual AI voice & WhatsApp.',
        icon: 'BoltIcon',
        stat: '85%',
        statLabel: 'Routine Inquiries Automated',
        color: 'from-emerald-500/20 to-teal-500/10',
      },
      {
        slug: 'housekeeping',
        title: 'Housekeeping & Turndown Teams',
        badge: 'Auto-Dispatch',
        description:
          'Real-time cleaning queue prioritization based on guest departures, VIP arrivals, and IoT room occupancy telemetry.',
        icon: 'SparklesIcon',
        stat: '32 min',
        statLabel: 'Faster Room Turnover',
        color: 'from-purple-500/20 to-pink-500/10',
      },
      {
        slug: 'kitchen-fb',
        title: 'Kitchen & F&B Services',
        badge: 'Live KDS',
        description:
          'Digital in-room dining, allergen filters, order pacing, and instant POS folio billing without manual phone transfers.',
        icon: 'FireIcon',
        stat: '+28%',
        statLabel: 'In-Room Dining Volume',
        color: 'from-rose-500/20 to-orange-500/10',
      },
    ],
  },
  {
    category: 'Property Categories',
    description: 'Custom configurations engineered for unique hospitality formats and scale.',
    items: [
      {
        slug: 'boutique-hotels',
        title: 'Boutique & Heritage Hotels',
        badge: 'High-Touch Luxury',
        description:
          'Curated local storytelling, personalized concierge itineraries, and ultra-responsive attention tailored to discerning boutique guests.',
        icon: 'HomeModernIcon',
        stat: '4.9/5',
        statLabel: 'Guest Satisfaction Rating',
        color: 'from-amber-500/20 to-yellow-500/10',
      },
      {
        slug: 'resorts',
        title: 'Resorts & Spa Destinations',
        badge: 'Multi-Venue',
        description:
          'Cabana rentals, spa scheduling, excursion bookings, and multilingual voice assistance across expansive multi-acre resort properties.',
        icon: 'BuildingStorefrontIcon',
        stat: '40+ Langs',
        statLabel: 'Native Voice Concierge',
        color: 'from-cyan-500/20 to-blue-500/10',
      },
      {
        slug: 'hotel-chains',
        title: 'Hotel Chains & Multi-Property Franchises',
        badge: 'Enterprise Cloud',
        description:
          'Centralized management for 10 to 1,000+ properties with tenant isolation, custom brand tone, centralized knowledge base, and single sign-on.',
        icon: 'BuildingOfficeIcon',
        stat: '100% Sync',
        statLabel: 'PMS & CRS Parity',
        color: 'from-indigo-500/20 to-purple-500/10',
      },
    ],
  },
];

export default function SolutionsIndexPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Icon name="CubeTransparentIcon" size={16} className="text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Hospitality Solutions Suite
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              AI orchestration crafted for every hotel role and property scale.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Whether you are an asset owner seeking EBITDA expansion or a front desk supervisor
              eliminating check-in queues, Ownstay provides purpose-built AI workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl hover:opacity-95 transition-all shadow-md"
              >
                <Icon name="CalendarDaysIcon" size={18} variant="solid" />
                Schedule Guided Walkthrough
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-secondary text-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-200 transition-all border border-border"
              >
                View Hotel Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid & Interactive Archetype Section */}
      <section className="py-20 bg-slate-50/50 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <SolutionsExplorer solutionsByAudience={solutionsByAudience} />
        </div>
      </section>

      {/* Interactive 3D Showcase Banner */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-3.5 py-1 text-xs font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  Live Hospitality Architecture
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Experience Ownstay running across your full tech stack.
                </h2>
                <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                  Test the guest voice agent, review automated housekeeping dispatch orders, and
                  observe instant PMS synchronization in our unified sandbox.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-orange-600 transition-all shadow-lg"
                  >
                    Schedule Guided Walkthrough
                    <Icon name="ArrowRightIcon" size={18} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-700 transition-all border border-slate-700"
                  >
                    Request Custom Pilot
                  </Link>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-950/80 p-2">
                <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/navigator_resort_3d_1788356199214.jpg"
                    alt="Ownstay Hospitality 3D Architecture"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 text-xs space-y-1 w-full">
                      <div className="flex justify-between items-center text-slate-300 font-medium">
                        <span>Connected PMS</span>
                        <span className="text-emerald-400 font-bold">● Oracle Opera Cloud</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-400">
                        <span>Response Latency</span>
                        <span className="text-white font-bold">340 ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
