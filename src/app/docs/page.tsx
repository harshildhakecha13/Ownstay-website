'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Endpoint {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  path: string;
  category: string;
  summary: string;
  description: string;
  requestBody?: string;
  responseBody: string;
}

const ENDPOINTS: Endpoint[] = [
  {
    method: 'GET',
    path: '/v1/conversations',
    category: 'Conversations',
    summary: 'List active guest conversations',
    description:
      'Retrieve real-time guest conversations with sentiment scoring, channel tag, and current state.',
    responseBody: JSON.stringify(
      {
        object: 'list',
        data: [
          {
            id: 'conv_89a7f3',
            guest_name: 'Elena Rostov',
            room_number: '402',
            channel: 'whatsapp',
            language: 'ru',
            last_message: 'Can I please request late checkout tomorrow at 1:00 PM?',
            ai_status: 'resolved_automated',
            created_at: '2026-09-02T13:14:22Z',
          },
          {
            id: 'conv_12d4b9',
            guest_name: 'Marcus Sterling',
            room_number: '215',
            channel: 'voice_ai',
            language: 'en',
            last_message: 'Shuttle pickup booked for 6:30 AM terminal 2.',
            ai_status: 'resolved_automated',
            created_at: '2026-09-02T13:08:10Z',
          },
        ],
        has_more: false,
      },
      null,
      2
    ),
  },
  {
    method: 'POST',
    path: '/v1/conversations/send',
    category: 'Conversations',
    summary: 'Send outbound guest message',
    description:
      'Dispatch an automated or manual WhatsApp, SMS, or in-app message directly to a guest.',
    requestBody: JSON.stringify(
      {
        room_number: '501',
        channel: 'whatsapp',
        template_id: 'welcome_vip_amenity',
        parameters: {
          guest_name: 'Senator Vance',
          amenity: 'Champagne & Artisanal Cheese Board',
        },
      },
      null,
      2
    ),
    responseBody: JSON.stringify(
      {
        id: 'msg_98b42e',
        status: 'delivered',
        channel: 'whatsapp',
        recipient: '+14155552671',
        timestamp: '2026-09-02T13:25:00Z',
      },
      null,
      2
    ),
  },
  {
    method: 'GET',
    path: '/v1/requests',
    category: 'Operations',
    summary: 'List guest service tickets',
    description:
      'Query open and in-progress guest requests dispatched to housekeeping, engineering, or kitchen.',
    responseBody: JSON.stringify(
      {
        object: 'list',
        tickets: [
          {
            id: 'req_3389',
            department: 'housekeeping',
            item: 'Hypoallergenic Feather Pillows (x2)',
            room: '314',
            status: 'in_progress',
            assigned_to: 'Maria Garcia',
            sla_minutes_remaining: 8,
          },
          {
            id: 'req_3388',
            department: 'kitchen',
            item: 'Truffle Burger & Sparkling San Pellegrino',
            room: '108',
            status: 'completed',
            delivered_in_seconds: 400,
          },
        ],
      },
      null,
      2
    ),
  },
  {
    method: 'POST',
    path: '/v1/knowledge/sync',
    category: 'Knowledge Base',
    summary: 'Sync hotel knowledge documents',
    description:
      'Upload PDF policy manuals, restaurant menus, or concierge recommendation guides to the AI vector store.',
    requestBody: JSON.stringify(
      {
        document_type: 'menu_update',
        title: 'Autumn Rooftop Bar & Lounge Menu 2026',
        items_count: 34,
        auto_vectorize: true,
      },
      null,
      2
    ),
    responseBody: JSON.stringify(
      {
        status: 'indexed_successfully',
        document_id: 'doc_883a',
        embeddings_generated: 48,
        latency_ms: 310,
      },
      null,
      2
    ),
  },
  {
    method: 'GET',
    path: '/v1/pms/health',
    category: 'Integrations',
    summary: 'PMS two-way sync health check',
    description:
      'Verify active socket and REST polling health with Opera, Cloudbeds, Amadeus, or StayNTouch.',
    responseBody: JSON.stringify(
      {
        status: 'healthy',
        pms_type: 'Oracle Opera Cloud (OHIP)',
        property_id: 'AZURE_RESORT_01',
        last_sync_timestamp: '2026-09-02T13:24:58Z',
        active_rooms_tracked: 142,
        sync_latency_ms: 45,
      },
      null,
      2
    ),
  },
];

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
  const [activeTab, setActiveTab] = useState<'guides' | 'api' | 'faq'>('guides');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(ENDPOINTS[0]);
  const [apiTesting, setApiTesting] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleTestEndpoint = () => {
    setApiTesting(true);
    setApiResponse(null);
    setTimeout(() => {
      setApiTesting(false);
      setApiResponse(selectedEndpoint.responseBody);
    }, 450);
  };

  const handleCopyCurl = () => {
    const curl = `curl -X ${selectedEndpoint.method} "https://api.ownstay.ai${selectedEndpoint.path}" \\
  -H "Authorization: Bearer ownstay_live_key_9981" \\
  -H "Content-Type: application/json"`;
    navigator.clipboard.writeText(curl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              Explore step-by-step guides, interactive REST API endpoints, sandbox testing, and PMS
              integration specifications.
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
              onClick={() => setActiveTab('api')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'api'
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'bg-slate-100 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="CodeBracketIcon" size={14} />
              Interactive API Tester
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
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Operational Playbooks</h2>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step tutorials to get your hotel property live in under an hour.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  Book a guided walkthrough →
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredGuides.map((guide) => (
                  <div
                    key={guide.id}
                    className="bg-white rounded-3xl border border-border p-8 shadow-xs hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                        {guide.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                        <Icon name="ClockIcon" size={13} />
                        {guide.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{guide.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                      {guide.description}
                    </p>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-border space-y-2.5 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Execution Steps
                      </div>
                      {guide.steps.map((step, idx) => (
                        <div key={idx} className="text-xs text-foreground flex items-start gap-2">
                          <span className="text-primary font-bold">›</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      Request guided onboarding with an engineer →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE API TESTER */}
          {activeTab === 'api' && (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Sidebar: Endpoints list */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Select REST Endpoint
                </div>
                {ENDPOINTS.map((ep) => (
                  <div
                    key={ep.path}
                    onClick={() => {
                      setSelectedEndpoint(ep);
                      setApiResponse(null);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedEndpoint.path === ep.path
                        ? 'bg-primary/5 border-primary shadow-xs'
                        : 'bg-white border-border hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          ep.method === 'GET'
                            ? 'bg-emerald-100 text-emerald-700'
                            : ep.method === 'POST'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="text-xs font-mono font-bold text-foreground">{ep.path}</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">{ep.summary}</p>
                  </div>
                ))}

                <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 mt-6">
                  <div className="font-bold text-xs text-orange-950 mb-1">Production Base URL</div>
                  <code className="text-[11px] font-mono text-orange-900 bg-white/80 px-2 py-1 rounded border border-orange-200 block truncate">
                    https://api.ownstay.ai/v1
                  </code>
                </div>
              </div>

              {/* Right Panel: Interactive Sandbox Tester */}
              <div className="lg:col-span-8 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
                        selectedEndpoint.method === 'GET'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : selectedEndpoint.method === 'POST'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {selectedEndpoint.method}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-slate-100">
                      https://api.ownstay.ai{selectedEndpoint.path}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleCopyCurl}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="DocumentDuplicateIcon" size={14} />
                      {copied ? 'Copied Curl!' : 'Copy cURL'}
                    </button>
                    <button
                      onClick={handleTestEndpoint}
                      disabled={apiTesting}
                      className="px-5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2 disabled:opacity-50"
                    >
                      {apiTesting ? (
                        <>
                          <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Executing...
                        </>
                      ) : (
                        <>
                          <Icon name="PlayIcon" size={14} />
                          Send Request
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Description
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedEndpoint.description}
                    </p>
                  </div>

                  {selectedEndpoint.requestBody && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Sample Request Payload (JSON)
                      </h4>
                      <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto">
                        {selectedEndpoint.requestBody}
                      </pre>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Response Payload (200 OK)
                      </h4>
                      {apiResponse && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          ● Status: 200 OK (Latency: 38ms)
                        </span>
                      )}
                    </div>
                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-blue-300 overflow-x-auto max-h-80">
                      {apiResponse || selectedEndpoint.responseBody}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FAQS & SECURITY */}
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
