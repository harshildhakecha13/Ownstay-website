'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

type TabKey = 'chat' | 'voice' | 'whatsapp' | 'requests';

interface Tab {
  key: TabKey;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { key: 'chat', label: 'Chat', icon: 'ChatBubbleLeftRightIcon' },
  { key: 'voice', label: 'Voice', icon: 'MicrophoneIcon' },
  { key: 'whatsapp', label: 'WhatsApp', icon: 'DevicePhoneMobileIcon' },
  { key: 'requests', label: 'Guest Requests', icon: 'ClipboardDocumentListIcon' },
];

const tabContent: Record<TabKey, { headline: string; description: string; visual: React.ReactNode }> = {
  chat: {
    headline: 'AI Guest Chat',
    description: 'Guests communicate with Ownstay through your website, app, or any digital channel. Instant, intelligent, and always on-brand.',
    visual: (
      <div className="space-y-3">
        {[
          { from: 'guest', text: 'What time is breakfast?' },
          { from: 'ai', text: 'Breakfast is served from 7:00 AM to 10:30 AM in our restaurant on the ground floor. Would you like a table reservation?' },
          { from: 'guest', text: "Yes please, for 2 people at 8:30." },
          { from: 'ai', text: "Perfect — table for 2 at 8:30 AM noted. Enjoy your morning!" },
        ].map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'guest' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.from === 'guest' ?'bg-foreground text-white rounded-tr-sm' :'bg-white border border-border text-foreground rounded-tl-sm shadow-card'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  voice: {
    headline: 'AI Voice Receptionist',
    description: 'Ownstay answers hotel calls, understands guest requests, and provides instant responses — without putting anyone on hold.',
    visual: (
      <div className="flex flex-col items-center justify-center py-8 gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="MicrophoneIcon" size={36} className="text-primary" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-ring" />
        </div>
        <div className="flex items-end gap-1.5 h-10">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full bg-primary ${
                i % 2 === 0 ? 'animate-waveform' : i % 3 === 0 ? 'animate-waveform-3' : 'animate-waveform-2'
              }`}
              style={{ height: `${20 + (i % 4) * 10}px` }}
            />
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">Ownstay is listening...</p>
          <p className="text-xs text-muted-foreground mt-1">Guest: "Can I get a wake-up call at 6 AM?"</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-3 text-sm text-green-700 font-medium">
          ✓ Wake-up call scheduled for 6:00 AM
        </div>
      </div>
    ),
  },
  whatsapp: {
    headline: 'WhatsApp Integration',
    description: 'Meet guests where they already are. Ownstay handles WhatsApp conversations so your team never has to monitor another messaging app.',
    visual: (
      <div className="bg-[#ECE5DD] rounded-2xl p-4 space-y-3">
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground shadow-sm max-w-[80%]">
            Hi! Do you offer airport transfers?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-foreground shadow-sm max-w-[80%]">
            Hello! Yes, we offer airport transfers. Round trip from SGD 45 per vehicle. Would you like to book one?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground shadow-sm max-w-[80%]">
            Yes please, arrival tomorrow at 3 PM
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-foreground shadow-sm max-w-[80%]">
            Noted! Transfer booked for tomorrow, 3:00 PM arrival. Our driver will meet you at arrivals. ✓
          </div>
        </div>
      </div>
    ),
  },
  requests: {
    headline: 'Guest Requests',
    description: 'Guests request amenities, services, and assistance through Ownstay. Requests are routed directly to the right hotel team.',
    visual: (
      <div className="space-y-3">
        {[
          { icon: 'ArchiveBoxIcon', text: 'Extra towels requested', status: 'Sent to Housekeeping', color: 'text-blue-600', bg: 'bg-blue-50' },
          { icon: 'MoonIcon', text: 'Late checkout — 1:00 PM', status: 'Pending approval', color: 'text-amber-600', bg: 'bg-amber-50' },
          { icon: 'BuildingStorefrontIcon', text: 'Restaurant reservation — 7 PM, 2 guests', status: 'Confirmed', color: 'text-green-600', bg: 'bg-green-50' },
          { icon: 'WrenchScrewdriverIcon', text: 'AC not cooling — Room 412', status: 'Sent to Maintenance', color: 'text-rose-600', bg: 'bg-rose-50' },
        ].map((req, i) => (
          <div key={i} className="flex items-center gap-4 bg-white border border-border rounded-xl px-4 py-3 shadow-card">
            <div className={`w-9 h-9 rounded-lg ${req.bg} flex items-center justify-center flex-shrink-0`}>
              <Icon name={req.icon as Parameters<typeof Icon>[0]['name']} size={16} className={req.color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{req.text}</p>
              <p className={`text-xs mt-0.5 ${req.color}`}>{req.status}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('chat');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.sol-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-secondary" id="solutions" aria-labelledby="solution-heading" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 sol-reveal" style={{ opacity: 1, transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">The Solution</p>
          <h2 id="solution-heading" className="text-section-xl font-bold text-foreground tracking-tight mb-5">
            Meet Ownstay.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            One AI receptionist for every guest conversation — across every channel.
          </p>
        </div>

        <div className="bg-card rounded-3xl border border-border shadow-card-hover overflow-hidden sol-reveal" style={{ opacity: 1, transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s' }}>
          {/* Tab Bar */}
          <div className="flex overflow-x-auto border-b border-border px-6 gap-1 pt-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-t-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
                aria-pressed={activeTab === tab.key}
              >
                <Icon name={tab.icon as Parameters<typeof Icon>[0]['name']} size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-0 min-h-[420px]">
            {/* Left — Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
              <h3 className="text-display-lg font-bold text-foreground mb-4">
                {tabContent[activeTab].headline}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {tabContent[activeTab].description}
              </p>
              <Link
                href="/product"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Learn more <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>

            {/* Right — Visual */}
            <div className="p-8 lg:p-10 bg-secondary/60 flex items-center">
              {tabContent[activeTab].visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}