'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

interface Role {
  id: string;
  title: string;
  team: 'Engineering' | 'Customer Success' | 'Design' | 'Sales';
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const OPEN_ROLES: Role[] = [
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI / NLP Engineer',
    team: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '4+ years',
    description:
      "Build and optimize the real-time NLP and audio streaming pipelines powering Ownstay's multilingual AI Receptionist and Voice AI.",
    requirements: [
      'Experience with LLM orchestration (LangChain, LlamaIndex, vLLM) and low-latency streaming inference.',
      'Proficiency with Python, TypeScript, Fastify/Node.js, and Vector Databases (Pinecone/Milvus).',
      'Knowledge of WebSocket streaming and telephony protocols (SIP, WebRTC).',
    ],
  },
  {
    id: 'fullstack-engineer',
    title: 'Senior Full-Stack Engineer (Next.js + Node)',
    team: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '3+ years',
    description:
      'Own mission-critical features on the Ownstay hotel operations dashboard, kitchen KDS station, and guest mobile web apps.',
    requirements: [
      'High proficiency in React, Next.js 15 App Router, TypeScript, and Tailwind CSS.',
      'Experience building real-time collaborative UI states and WebSocket sync engines.',
      'Strong empathy for hotel staff and front desk operational workflows.',
    ],
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager (MENA & EU)',
    team: 'Customer Success',
    location: 'Dubai / Remote',
    type: 'Full-time',
    experience: '3+ years in Hospitality / SaaS',
    description:
      "Help luxury and boutique hotels onboard and achieve rapid ROI with Ownstay. You'll work closely with General Managers and Front Office Directors.",
    requirements: [
      'Background working in hotel management or hotel technology SaaS onboarding.',
      'Familiarity with hotel PMS workflows (Opera, Amadeus, Cloudbeds).',
      'Fluency in English (Arabic or French is a major plus).',
    ],
  },
  {
    id: 'product-designer',
    title: 'Lead Product Designer',
    team: 'Design',
    location: 'Remote (Worldwide)',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Craft high-density, accessible, and elegant interfaces across web, tablet KDS, and mobile guest portals.',
    requirements: [
      'Exceptional portfolio showcasing complex B2B SaaS dashboards and consumer-facing mobile experiences.',
      'Deep mastery of Figma design systems, micro-interactions, and responsive layouts.',
      'Passion for minimalist typography and clean information hierarchy.',
    ],
  },
  {
    id: 'sdr-sales',
    title: 'Sales Development Representative',
    team: 'Sales',
    location: 'Bangalore / Hybrid',
    type: 'Full-time',
    experience: '1-3 years',
    description:
      'Engage hotel owners, General Managers, and Hospitality groups across APAC and the Americas to introduce Ownstay AI.',
    requirements: [
      'Proven track record in B2B outbound prospecting or hospitality tech sales.',
      'High energy, curious mindset, and superb written and verbal communication skills.',
    ],
  },
];

const PERKS = [
  {
    icon: 'GlobeAltIcon' as const,
    title: 'Remote-First Flexibility',
    desc: 'Work from anywhere in the world. We value outcomes, clarity, and autonomous ownership.',
  },
  {
    icon: 'SparklesIcon' as const,
    title: 'Meaningful Equity',
    desc: 'Every full-time team member receives generous stock options to share in the long-term upside.',
  },
  {
    icon: 'HeartIcon' as const,
    title: 'Premium Healthcare',
    desc: 'Comprehensive medical, dental, and wellness coverage for you and your dependents.',
  },
  {
    icon: 'AcademicCapIcon' as const,
    title: 'Learning & Growth Budget',
    desc: '$1,500/year for conferences, online courses, technical books, and coaching.',
  },
  {
    icon: 'ClockIcon' as const,
    title: 'Flexible Time Off',
    desc: 'Take the recharge time you need. We trust you to manage your schedule responsibly.',
  },
  {
    icon: 'BuildingOffice2Icon' as const,
    title: 'Partner Hotel Stays',
    desc: 'Annual travel stipend to experience and stay at our partner luxury hotels worldwide.',
  },
];

const TEAMS = ['All Teams', 'Engineering', 'Customer Success', 'Design', 'Sales'];

export default function CareersPage() {
  const [selectedTeam, setSelectedTeam] = useState('All Teams');
  const [applyingRole, setApplyingRole] = useState<Role | null>(null);

  // Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantCover, setApplicantCover] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredRoles = OPEN_ROLES.filter(
    (r) => selectedTeam === 'All Teams' || r.team === selectedTeam
  );

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCloseModal = () => {
    setApplyingRole(null);
    setSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPortfolio('');
    setApplicantCover('');
  };

  return (
    <main className="overflow-x-hidden min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-slate-50 to-background border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                We&apos;re Hiring
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              Build the operating system for <span className="text-primary">global hotels.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join a high-velocity, customer-obsessed team making AI genuinely useful for 1,000+
              hotels worldwide. We move fast, ship daily, and prioritize craft.
            </p>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-20 bg-slate-50 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">
              Why build with Ownstay
            </h2>
            <p className="text-muted-foreground text-sm">
              We provide the environment, autonomy, and resources you need to do the best work of
              your career.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="bg-white rounded-3xl p-7 border border-border hover:border-primary/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={perk.icon} size={20} />
                </div>
                <h3 className="font-bold text-foreground text-base">{perk.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                Open Positions
              </h2>
              <p className="text-sm text-muted-foreground">
                Explore available roles across our engineering, product, and go-to-market teams.
              </p>
            </div>

            {/* Team Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {TEAMS.map((team) => (
                <button
                  key={team}
                  onClick={() => setSelectedTeam(team)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                    selectedTeam === team
                      ? 'bg-primary text-white shadow-sm shadow-primary/20'
                      : 'bg-slate-100 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>

          {/* Roles List */}
          <div className="space-y-6">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl border border-border p-7 sm:p-8 hover:border-primary/40 hover:shadow-lg transition-all group flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                      {role.team}
                    </span>
                    <span className="text-xs bg-slate-100 text-muted-foreground px-3 py-1 rounded-full font-medium">
                      {role.location}
                    </span>
                    <span className="text-xs bg-slate-100 text-muted-foreground px-3 py-1 rounded-full font-medium">
                      {role.type}
                    </span>
                    <span className="text-xs bg-slate-100 text-muted-foreground px-3 py-1 rounded-full font-medium">
                      {role.experience}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <button
                  onClick={() => setApplyingRole(role)}
                  className="px-6 py-3 rounded-2xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm shadow-primary/20 shrink-0 self-start lg:self-center"
                >
                  Apply for Role →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Application Modal */}
      {applyingRole && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-border p-6 sm:p-8 my-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-wider">
                  Applying for
                </div>
                <h3 className="text-lg font-bold text-foreground">{applyingRole.title}</h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100"
              >
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="CheckCircleIcon" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Application Received!</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{applicantName}</strong>. Our engineering & hiring leads will
                  review your profile and reach out within 48 hours.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    LinkedIn / GitHub / Portfolio URL
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/janedoe"
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    Why are you excited about Ownstay? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about a project you are proud of or what interests you about hospitality AI..."
                    value={applicantCover}
                    onChange={(e) => setApplicantCover(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* General Inquiry Footer */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Don&apos;t see your exact role?
          </h2>
          <p className="text-xs text-muted-foreground mb-6 max-w-md mx-auto">
            We are always eager to meet world-class engineers, designers, and operators.
          </p>
          <a
            href="mailto:careers@ownstay.ai"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-bold text-xs hover:bg-primary/90 transition-colors"
          >
            Email Founders Directly (careers@ownstay.ai)
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
