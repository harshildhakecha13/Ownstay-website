import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { title: 'Quick Start Guide', desc: 'Set up Ownstay for your hotel in under 30 minutes.' },
      { title: 'Account Setup', desc: 'Configure your hotel profile, rooms, and team members.' },
      { title: 'First Conversation', desc: 'Test your AI Receptionist before going live.' },
    ],
  },
  {
    id: 'ai-receptionist',
    title: 'AI Receptionist',
    items: [
      { title: 'Training Your AI', desc: 'Add hotel-specific knowledge: FAQs, policies, amenities.' },
      { title: 'Conversation Flows', desc: 'Customize how the AI handles common guest scenarios.' },
      { title: 'Escalation Rules', desc: 'Define when and how to hand off to human staff.' },
    ],
  },
  {
    id: 'voice-ai',
    title: 'Voice AI',
    items: [
      { title: 'Phone Number Setup', desc: 'Connect your hotel\'s phone number to Ownstay Voice AI.' },
      { title: 'Call Routing', desc: 'Configure how calls are routed based on guest intent.' },
      { title: 'Voice Customization', desc: 'Choose voice tone, language, and greeting style.' },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    items: [
      { title: 'PMS Integration', desc: 'Connect Opera, Cloudbeds, Mews, and 20+ PMS systems.' },
      { title: 'WhatsApp Business', desc: 'Link your WhatsApp Business account for guest messaging.' },
      { title: 'Webhook API', desc: 'Build custom integrations with the Ownstay REST API.' },
    ],
  },
];

const apiEndpoints = [
  { method: 'GET', path: '/v1/conversations', desc: 'List all guest conversations' },
  { method: 'POST', path: '/v1/conversations', desc: 'Start a new conversation' },
  { method: 'GET', path: '/v1/conversations/:id', desc: 'Get conversation details' },
  { method: 'POST', path: '/v1/knowledge', desc: 'Add knowledge base entry' },
  { method: 'GET', path: '/v1/requests', desc: 'List guest requests' },
  { method: 'PATCH', path: '/v1/requests/:id', desc: 'Update request status' },
];

export default function DocumentationPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Ownstay Docs
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Everything you need to set up, configure, and integrate Ownstay at your hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                Get API Access
              </Link>
              <a href="mailto:support@ownstay.ai" className="inline-flex items-center justify-center px-5 py-2.5 border border-border rounded-xl font-semibold text-sm text-foreground hover:bg-muted/50 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-24 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {s.title}
                </a>
              ))}
              <a href="#api" className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                API Reference
              </a>
            </nav>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-14">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">{section.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <div key={item.title} className="bg-muted/30 rounded-2xl p-5 border border-border hover:border-primary/30 transition-colors cursor-pointer group">
                      <h3 className="font-semibold text-foreground text-sm mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* API Reference */}
            <div id="api">
              <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">API Reference</h2>
              <p className="text-muted-foreground mb-6 text-sm">Base URL: <code className="bg-muted px-2 py-0.5 rounded text-xs font-mono">https://api.ownstay.ai</code></p>
              <div className="bg-muted/20 rounded-2xl border border-border overflow-hidden">
                <div className="px-5 py-3 border-b border-border bg-muted/40">
                  <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Endpoints</span>
                </div>
                <div className="divide-y divide-border">
                  {apiEndpoints.map((ep) => (
                    <div key={ep.path} className="flex items-center gap-4 px-5 py-3.5 hover:bg-muted/30 transition-colors">
                      <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded flex-shrink-0 ${ep.method === 'GET' ? 'bg-green-100 text-green-700' : ep.method === 'POST' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                        {ep.method}
                      </span>
                      <code className="text-xs font-mono text-foreground flex-shrink-0">{ep.path}</code>
                      <span className="text-xs text-muted-foreground">{ep.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <p className="text-sm text-foreground font-medium mb-1">Need full API documentation?</p>
                <p className="text-xs text-muted-foreground mb-3">Full API docs with request/response examples are available to registered partners.</p>
                <Link href="/contact" className="inline-flex items-center text-xs font-semibold text-primary hover:underline">
                  Request API access →
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </main>
  );
}
